import { action, observable } from 'mobx';

export interface IModalContainer {
}

const KeyGen = (function* (id) {
  while (true) {
    yield `modal-${id}`;
    id += 1;
  }
})(1);

const containerInstances: IModalContainer[] = observable.array();

const removeInstance = action((instance: IModalContainer) => {
  const index = containerInstances.indexOf(instance);
  if (index > -1) {
    containerInstances.splice(index, 1);
  }
});

const addInstance = action((instance: IModalContainer) => {
  removeInstance(instance);
  containerInstances.push(instance);
});

function getKey(): string {
  return KeyGen.next().value;
}

const ModalManager = {
  addInstance,
  removeInstance,
  getKey,
  mousePositionEventBound: false,
};

export default ModalManager;
