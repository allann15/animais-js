import outsideClick from "./outsideclick.js";

export default class DropDown{
    constructor(menu, events){
        this.menus = document.querySelectorAll(menu);
        this.activeDropdown = this.activeDropdown.bind(this);
        if(events === undefined){
           this.events = ['touchstart','click']
        } else{
            this.events = events
        }
    }
    //'[data-dropdown]'
   
    

     activeDropdown(event){
        event.preventDefault();
        const element = event.currentTarget
        element.classList.add('active');
        outsideClick(element, this.events, () => {
            element.classList.remove('active');
        })
    }
    addEventDropdown(){
        this.menus.forEach((item) =>{
            this.events.forEach((userEvent) => {
                item.addEventListener(userEvent, this.activeDropdown);
            })
        })
    }
    init(){
        if(this.menus.length){
            this.addEventDropdown()
        }
        return this
    }
    

        
}