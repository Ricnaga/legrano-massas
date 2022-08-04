import { useCaneloneEspinafre } from '../menu/caneloneEspinafre';
import { useCaneloneTradicional } from '../menu/caneloneTradicional';
import { useNhoque } from '../menu/nhoque';
import { useNhoqueRecheado } from '../menu/nhoqueRecheado';

type UseMenuProviderItems = Record<
  'items',
  Array<{
    id: string;
    name: string;
    price: number;
    weight: string;
    amount: number;
    selected: boolean;
  }>
>;

export type UseMenuProviderData = {
  id: string;
  dough: string;
} & UseMenuProviderItems;

export const useMenuProvider = () => {
  const {
    data: { nhoque_state },
    functions: { dispatchNhoque },
  } = useNhoque();
  const {
    data: { nhoqueRecheado_state },
    functions: { dispatchNhoqueRecheado },
  } = useNhoqueRecheado();
  const {
    data: { caneloneEspinafre_state },
    functions: { dispatchCaneloneEspinafre },
  } = useCaneloneEspinafre();
  const {
    data: { caneloneTradicional_state },
    functions: { dispatchCaneloneTradicional },
  } = useCaneloneTradicional();

  return {
    data: {
      nhoque_state,
      nhoqueRecheado_state,
      caneloneEspinafre_state,
      caneloneTradicional_state,
    },
    funtions: {
      dispatchNhoque,
      dispatchNhoqueRecheado,
      dispatchCaneloneEspinafre,
      dispatchCaneloneTradicional,
    },
  };
};
