import { rehydrate } from 'overmind';

export const rehydrateData = ({ state }, data) => {
    // Grab a previous copy of the state, for example stored in
    // localstorage
    rehydrate(state, data || {});
};
