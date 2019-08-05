import { create } from 'apisauce';
import { observable } from 'mobx';

export const API_ROOT = '/api';

export class AsyncRequest {
    @observable loading = false;
    @observable error = '';
    @observable data: any = {};

}

const api = create({ baseURL: API_ROOT, });


export default api;
