import {BehaviorSubject, Observable} from "rx";
import {List} from "immutable";

export class RouterStore {
    private stackSceneList = List<string>();
    private stackScenesSubject = new BehaviorSubject<List<string>>(this.stackSceneList);
    private currentSceneValue = "";
    private currentSceneSubject = new BehaviorSubject<string>(this.currentSceneValue);

    public currentScene(): Observable<string> {
        return this.currentSceneSubject;
    }

    public updateCurrentScene(currentSceneValue: string): void {
        this.currentSceneValue = currentSceneValue;
        this.currentSceneSubject.onNext(this.currentSceneValue);
    }

    public getCurrentScene(): string {
        return this.currentSceneValue;
    }
}

export const routerStore = new RouterStore();
