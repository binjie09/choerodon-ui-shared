const LC_APP = Symbol('LC_APP');
const MASTER = Symbol('MASTER');

export interface IStore extends Map<symbol | string, any> {
  LC_APP?: symbol;
  MASTER?: symbol;
}

const Store: IStore = new Map<symbol | string, any>(
  [[LC_APP, {}], [MASTER, {}]],
);

Store.LC_APP = LC_APP;
Store.MASTER = MASTER;


export default Store;
