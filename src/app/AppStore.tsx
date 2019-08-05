import { action, computed, observable } from "mobx";
import { getRandomArbitrary } from 'utils/utils';

export const appStoreSelector = ({ appStore }) => ({ appStore });

export class AppStore {

    @observable positions = {};
    @observable balls = {};

    constructor() {
    }

    @computed
    get ballsArray() {
        return Object.values(this.balls).map((ball) => ({ ...ball, xDiff: getRandomArbitrary(5, 50) }))
    }

    @action
    updatePosition({ id, pos }) {
        this.positions[id] = pos
    }

    @action
    clearPosition() {
        this.positions = {}
    }

    @action
    updateBallPosition({ id, pos }) {
        this.balls[id].x = pos
    }

    @action
    setBalls(balls) {
        this.balls = balls
    }

    @action
    addBall(ball) {
        this.balls = { ...this.balls, ...ball }
    }

    @action
    removeBalls(numToRemove) {
        const values = Object.values(this.balls).slice(numToRemove)
        const temp = {}
        values.forEach((item: any) => temp[item.id] = item)
        this.balls = temp
    }

}
