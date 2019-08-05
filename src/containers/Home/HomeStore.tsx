import { action, observable } from 'mobx';


export const homeStoreSelector = ({ appStore }) => ({ homeStore: appStore.appStore });

export default class HomeStore {

    @observable positions = {};

    constructor() {
    }

    @action
    updatePosition({ id, pos }) {
        this.positions[id] = pos
    }


}
