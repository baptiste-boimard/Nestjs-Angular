import { createAction, props } from '@ngrx/store';
import { ExternalData } from '../model/ExternalData.model';

export const loadExternalData = createAction('[ExternalData] Load External Data');

export const loadExternalDataSuccess = createAction(
  '[ExternalData] Load External Data Success',
  props<{ data: ExternalData[] }>()
);

export const loadExternalDataFailure = createAction(
  '[ExternalData] Load External Data Failure',
  props<{ error: string }>()
);

// Action pour charger les données depuis Service B
export const loadDataFromServiceB = createAction('[ExternalData] Load Data From ServiceB');

// Action déclenchée en cas de succès
export const loadDataFromServiceBSuccess = createAction(
  '[ExternalData] Load Data From ServiceB Success',
  props<{ data: ExternalData[] }>() // Les données reçues
);

// Action déclenchée en cas d'erreur
export const loadDataFromServiceBFailure = createAction(
  '[ExternalData] Load Data From ServiceB Failure',
  props<{ error: string }>() // Message d'erreur
);