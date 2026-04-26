import { computed, Injectable, signal, Signal, WritableSignal } from "@angular/core";
import { Sign } from "crypto";


@Injectable({
    providedIn: 'root'
})

export class SidebarService{
    readonly isOpen : WritableSignal<boolean> = signal<boolean>(false);
    readonly mobileIsOpen : WritableSignal<boolean> = signal<boolean>(false); //Default to desktop

    readonly state : Signal<"open" | "closed"> = computed(()=> this.isOpen() ? 'open' : 'closed')

    ToggleSidebar(){
        this.isOpen.update(open => !open)
    }

    ToggleMobileSidebar(){
        this.mobileIsOpen.update(open => !open) //TODO: implement mobile sidebar if time allows
    }

}