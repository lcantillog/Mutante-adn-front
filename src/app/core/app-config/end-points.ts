import { environment } from "src/environments/environment";

export class EndPoints{

    static urlMutante(url: string): string {
        return  environment.urlMutante + url;
    }
}