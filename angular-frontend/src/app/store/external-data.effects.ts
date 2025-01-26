import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as ExternalDataActions from './external-data.actions';
import { ApiService } from '../services/api.service';
import { map, switchMap } from 'rxjs/operators';
import { inject } from '@angular/core';


// @Injectable()
// export class ExternalDataEffects {
//   constructor(
//     private actions$: Actions, // Injecte Actions pour écouter les actions dispatchées
//     private apiService: ApiService // Injecte ApiService pour effectuer des appels API
//   ) {}

  // Effet pour charger les données depuis l'API Gateway
//   loadDataFromServiceB$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(ExternalDataActions.loadDataFromServiceB), // Écoute l'action
//       mergeMap(() =>
//         this.apiService.getExternalDataUp().pipe(
//           map((data) => 
//             // En cas de succès, dispatch une nouvelle action avec les données reçues
//             ExternalDataActions.loadDataFromServiceBSuccess({ data })
//           ),
//           catchError((error) =>
//             // En cas d'erreur, dispatch une action avec le message d'erreur
//             of(ExternalDataActions.loadDataFromServiceBFailure({ error: error.message }))
//           )
//         )
//       )
//     )
//   );

// }

export const loadDataFromServiceB$ = createEffect(
    (actions$ = inject(Actions), apiService = inject(ApiService)) => {
        return actions$.pipe(
            ofType(ExternalDataActions.loadDataFromServiceB),
            switchMap(() => apiService.getExternalDataUp()),
            map((data) => ExternalDataActions.loadDataFromServiceBSuccess({ data }))
        );
    },
    { functional: true }
)
