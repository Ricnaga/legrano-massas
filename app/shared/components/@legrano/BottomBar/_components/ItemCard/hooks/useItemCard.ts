import { useMenuContext } from '@/app/contexts/menu';
import { MenuActionsType } from '@/app/contexts/menu/hooks/useMenuProvider';
import { convertToBRL } from '@/app/shared/utils/currency';
import { contactItems } from '../../../..';

type OnAmountParams = {
  action: keyof typeof MenuActionsType;
  categoryId?: string;
  itemId: string;
};

export const useItemCard = () => {
  const { dispatch, state } = useMenuContext();

  const formattedState = state.flatMap((categories) =>
    categories.items
      .filter((category) => category.selected)
      .map((category) => ({
        ...category,
        categoryId: categories.id,
      })),
  );

  const selectedCategories = formattedState.map((category) => ({
    ...category,
    price: convertToBRL(category.price),
  }));

  const totalPrice = convertToBRL(
    formattedState.reduce(
      (accumulator, currentValue) =>
        accumulator + +currentValue.price * currentValue.amount,
      0,
    ),
  );

  const categoriesToSend = state
    .filter(
      (categories) =>
        !!categories.items.filter((category) => category.selected).length,
    )
    .map((categories) => ({
      ...categories,
      category: categories.category.toUpperCase(),
      items: categories.items.filter((category) => !!category.amount),
    }));

  const whatsAppText = `${`
    Olá tudo bem %3F,
    %0A Quero encomendar algumas coisas que vi no site Legrano:%0A
    ${categoriesToSend.map(
      ({ category, items }) => `
      %0A${category}%0A
    ${items.map(
      ({ amount, name }) => `(${amount}x - ${name})%0A
    `,
    )}%0A
  `,
    )}`.replace(/,/g, '')}
    %0ATotal: ${totalPrice}`;

  const href = `location.href='${contactItems[0].href}?text=${whatsAppText}'`;

  const onAmount = ({ action, ...payload }: OnAmountParams) =>
    dispatch({
      action: MenuActionsType[action],
      payload,
    });

  const onClear = () =>
    dispatch({
      action: MenuActionsType.CLEAR_CART,
      payload: {
        itemId: null,
      },
    });

  return { selectedCategories, totalPrice, onClear, onAmount, href };
};
