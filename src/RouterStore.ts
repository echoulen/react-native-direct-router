import {BehaviorSubject, Observable} from "rx";
import {List} from "immutable";

export class RouterStore {
    private sceneStackList = List<string>().asMutable();
    private currentSceneValue = "";
    private currentSceneSubject = new BehaviorSubject<string>(this.currentSceneValue);

    public currentScene(): Observable<string> {
        return this.currentSceneSubject;
    }

    public updateCurrentScene(currentSceneValue: string): void {
        if (this.currentSceneValue !== currentSceneValue) {
            this.currentSceneValue = currentSceneValue;
            this.sceneStackList.push(this.currentSceneValue);
            this.currentSceneSubject.onNext(this.currentSceneValue);
        }
    }

    public popScene(): void {
        this.sceneStackList.pop();
        this.currentSceneSubject.onNext(this.sceneStackList.last());
    }
}

export const routerStore = new RouterStore();
