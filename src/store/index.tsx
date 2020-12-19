const LC_APP = Symbol('LC_APP');
const MASTER = Symbol('MASTER');
const COOPERATE = Symbol('COOPERATE');

export interface IStore extends Map<symbol | string, any> {
  LC_APP?: symbol;
  MASTER?: symbol;
  COOPERATE?: symbol;
}

const Store: IStore = new Map<symbol | string, any>(
  [[LC_APP, {}], [MASTER, {}], [COOPERATE, {}]],
);

Store.LC_APP = LC_APP;
Store.MASTER = MASTER;
Store.COOPERATE = COOPERATE;


export default Store;
