import { Alumns } from './../../alumns/models/index';
import { category} from '../../folders/models'




export interface inscription {

id:number;
alumnId: number;
folderId: number;

}

export interface IncriptionWhithAlumnAndFolder extends inscription {

alumn: Alumns;
folder: category;


}
