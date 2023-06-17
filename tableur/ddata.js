import{ last_row_after_header} from './intials_inputs_nb.js'  
export function ddatafct(){
            var ddata= [];
            ddata.push(  
            ['','Etat ','','','','','','','','','','','','','','','',   ''],
            ['','Etat2','','','','','','','','','','','','','','','',   ''],
            ['','Etat333','','','','','','','','','','','','','','','',   ''],
            ['','Etat444','','','','','','','','','','','','','','','','',   ''],
            //['','','','','','','','','','','','','','','','','',''],
            //[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
            ['','Projet','Consistance de Projet',"Taux d'avancement des travaux logement","Taux d'avancement des travaux VRD",'Raccordement en énergie Electrique','','','','','Raccordement en énergie Gaziere','','','','',   ''],
            ['','','','','',"Taux d'avancement des travaux",'Montant des travaux (devis SADEG)','Montant payé (DA)','Créances détenues travaux','Contraintes',"Taux d'avancement des travaux",'Montant des travaux (devis SADEG)','Montant payé (DA)','Créances détenues travaux','Contraintes',   ''],
            ['','','','','','','','','','','','','','','','','',   ''],
            ['','','','','','','','','','','','','','','','','',   '']       
            //['','','','','','','','','','','','','','','','','','',   '']            

            
            
            ) 
        
        for(let i=0 ; i<=last_row_after_header ; i++) {
          let zzrow=['','','','','','','','','','','','','','','','','',   '']
          ddata.push(zzrow);
        }
        return ddata
    }

        export function data22fct(){
            var retddata = ddatafct(last_row_after_header)
            return retddata.map(arr => [...arr]);
        }