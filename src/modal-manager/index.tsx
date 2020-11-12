import { action, observable } from 'mobx';

export interface IModalContainer {
}

export type MousePosition = { x: number; y: number };

export type ModalManagerType = {
  addInstance: (instance: IModalContainer) => void;
  removeInstance: (instance: IModalContainer) => void;
  getKey: () => string;
  mousePositionEventBound: boolean;
  mousePosition?: MousePosition;
  containerInstances: IModalContainer[];
}

const KeyGen = (function* (id) {
  while (true) {
    yield `modal-${id}`;
    id += 1;
  }
})(1);

const containerInstances: IModalContainer[] = observable.array<IModalContainer>();

const removeInstance: (instance: IModalContainer) => void = action((instance: IModalContainer) => {
  const index = containerInstances.indexOf(instance);
  if (index > -1) {
    containerInstances.splice(index, 1);
  }
});

const addInstance: (instance: IModalContainer) => void = action((instance: IModalContainer) => {
  removeInstance(instance);
  containerInstances.push(instance);
});

function getKey(): string {
  return KeyGen.next().value;
}

const ModalManager: ModalManagerType = {
  addInstance,
  removeInstance,
  getKey,
  mousePositionEventBound: false,
  containerInstances,
};

export default ModalManager;
