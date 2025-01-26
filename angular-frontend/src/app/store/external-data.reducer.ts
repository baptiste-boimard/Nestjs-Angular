import { createReducer, on } from '@ngrx/store';
import * as ExternalDataActions from './external-data.actions';
import { ExternalData } from '../model/ExternalData.model';

export interface ExternalDataState {
    datas: ExternalData[];
    serviceBDatas: ExternalData[];
}

export const initialState: ExternalDataState = {
    datas: [
        {id: 12, title: 'coucou', description: 'sddf'},
        {id: 13, title: 'cdfdfoucou', description: 'sddfmomom'},
        {id: 14, title: 'coucodfdfu', description: 'slklklddf'},
    ],
    serviceBDatas: []
};

export const externalDataReducer = createReducer(
    initialState,
    on(ExternalDataActions.loadExternalData, (state) => ({
      ...state,
    })),
    on(ExternalDataActions.loadExternalDataSuccess, (state, { data }) => ({
      ...state,
      datas: data, // Met à jour les données dans le store
    })),
    on(ExternalDataActions.loadExternalDataFailure, (state, { error }) => ({
      ...state,
      // Optionnel : tu peux enregistrer une erreur ici si nécessaire
    })),
    on(ExternalDataActions.loadDataFromServiceB, (state) => ({
        ...state,
    })),
    on(ExternalDataActions.loadDataFromServiceBSuccess, (state, { data }) => ({
        ...state,
        serviceBDatas: [...state.serviceBDatas, ...data],
    })),
    on(ExternalDataActions.loadDataFromServiceBFailure, (state, { error }) => ({
        ...state,
    }))
  );
