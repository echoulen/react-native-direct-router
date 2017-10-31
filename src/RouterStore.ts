import {BehaviorSubject, Observable} from "rx";
import {List} from "immutable";

export class RouterStore {
    private sceneStackList = List<string>().asMutable();
    private currentSceneValue = "";
    private currentSceneSubject = new BehaviorSubject<string>(this.currentSceneValue);
    private params: any = {};

    public currentScene(): Observable<string> {
        return this.currentSceneSubject;
    }

    public updateCurrentScene(currentSceneValue: string, params?: any): void {
        this.params = params || {};

        if (this.currentSceneValue !== currentSceneValue) {
            this.currentSceneValue = currentSceneValue;
            this.sceneStackList.push(this.currentSceneValue);
            this.currentSceneSubject.onNext(this.currentSceneValue);
        }
    }

    public popScene(): void {
        this.sceneStackList.pop();
        this.currentSceneValue = this.sceneStackList.last();
        this.currentSceneSubject.onNext(this.currentSceneValue);
    }

    public getParams(): any {
        return this.params;
    }

    public getCurrentScene(): string {
        return this.currentSceneValue;
    }
}

export const routerStore = new RouterStore();
