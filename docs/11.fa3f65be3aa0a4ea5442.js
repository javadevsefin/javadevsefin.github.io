(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"P1+v":function(t,a,e){"use strict";e.r(a),e.d(a,"GuicheModule",(function(){return K}));var c=e("ofXK"),i=e("tk/3"),n=e("3Pt+"),b=e("fXoL"),r=e("AytR"),o=e("IzEk"),s=e("vkgz");let d=(()=>{class t{constructor(t){this.http=t,this.API=r.a.API+"/atendeFacil/api/guiche"}listGuiche(){return this.http.get(""+this.API).pipe(Object(o.a)(1))}loadById(t){return this.http.get(`${this.API}/${t}`).pipe(Object(s.a)(console.log),Object(o.a)(1))}create(t){return this.http.post(""+this.API,t).pipe(Object(o.a)(1))}update(t){return this.http.put(`${this.API}/${t.id}`,t).pipe(Object(o.a)(1))}save(t){return t.id?this.update(t):this.create(t)}remove(t){return this.http.delete(`${this.API}/${t}`).pipe(Object(o.a)(1))}}return t.\u0275fac=function(a){return new(a||t)(b.Ob(i.a))},t.\u0275prov=b.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=e("tyNb");function u(t,a){if(1&t){const t=b.Lb();b.Kb(0,"tr"),b.ac(1,"\n            "),b.Kb(2,"td"),b.ac(3,"\n              "),b.Kb(4,"strong"),b.ac(5),b.Jb(),b.ac(6,"\n            "),b.Jb(),b.ac(7,"\n            "),b.Kb(8,"td"),b.ac(9),b.Jb(),b.ac(10,"\n            "),b.Kb(11,"td"),b.ac(12,"\n              "),b.ac(13,"\n              "),b.Kb(14,"button",26),b.Rb("click",(function(){b.Wb(t);const e=a.$implicit;return b.Tb().onEdit(e.id)})),b.Ib(15,"i",27),b.Jb(),b.ac(16,"\n              "),b.Kb(17,"button",28),b.Rb("click",(function(){b.Wb(t);const e=a.$implicit;return b.Tb().pegaDados(e.id,e.descricao)})),b.Ib(18,"i",29),b.Jb(),b.ac(19,"\n            "),b.Jb(),b.ac(20,"\n          "),b.Jb()}if(2&t){const t=a.$implicit;b.xb(5),b.bc(t.id),b.xb(4),b.bc(t.descricao)}}function h(t,a){1&t&&(b.Kb(0,"div",30),b.ac(1,"\n            "),b.Kb(2,"span"),b.ac(3," Registro excluido com sucesso! "),b.Jb(),b.ac(4,"\n           "),b.Jb())}let m=(()=>{class t{constructor(t,a,e){this.guicheService=t,this.router=a,this.route=e,this.mostrarMens=!1,this._id="",this._descricao=""}ngOnInit(){this.listarGuiche()}listarGuiche(){this.guicheService.listGuiche().subscribe(t=>this.guiches=t)}onEdit(t){this.router.navigate(["editar",t],{relativeTo:this.route})}onDelete(){this.guicheService.remove(this._id).subscribe(t=>{this.mostrarMens=!0,this.listarGuiche()})}pegaDados(t,a){this._id=t,this._descricao=a}}return t.\u0275fac=function(a){return new(a||t)(b.Hb(d),b.Hb(l.b),b.Hb(l.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-guiche-list"]],decls:98,vars:3,consts:[[1,"col-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/"],[1,"breadcrumb-item","active"],[1,"row","mb-4"],[1,"col-md"],[1,"h3","border-left","pl-2"],["type","button","routerLink","new",1,"btn","btn-success","float-right"],[1,"fas","fa-user-plus"],[1,"table","table-hover",2,"box-shadow","5px 5px 10px #000"],[1,"bg-success","text-light"],[4,"ngFor","ngForOf"],["id","ModalExclusao","tabindex","-1","role","dialog","aria-labelledby","TituloModalCentralizado","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","TituloModalCentralizado",1,"modal-title"],[1,"modal-body",2,"font-weight","bold"],[1,"col-md-12"],["style","text-align: center;","class","col-10 alert alert-danger","role","alert",4,"ngIf"],[1,"modal-footer"],["type","button","data-dismiss","modal",1,"btn","btn-danger"],[1,"fas","fa-window-close"],[1,"btn","btn-success",3,"click"],[1,"fas","fa-save"],[1,"btn","btn-outline-info","btn-sm",3,"click"],[1,"far","fa-edit"],["data-toggle","modal","data-target","#ModalExclusao",1,"btn","btn-outline-danger","btn-sm",3,"click"],[1,"far","fa-trash-alt"],["role","alert",1,"col-10","alert","alert-danger",2,"text-align","center"]],template:function(t,a){1&t&&(b.Kb(0,"div",0),b.ac(1,"\n    "),b.Kb(2,"nav"),b.ac(3,"\n      "),b.Kb(4,"ol",1),b.ac(5,"\n        "),b.Kb(6,"li",2),b.Kb(7,"a",3),b.ac(8,"In\xedcio"),b.Jb(),b.Jb(),b.ac(9,"\n        "),b.Kb(10,"li",4),b.ac(11,"Listagem"),b.Jb(),b.ac(12,"\n      "),b.Jb(),b.ac(13,"\n    "),b.Jb(),b.ac(14,"\n    "),b.Kb(15,"div",5),b.ac(16,"\n      "),b.Kb(17,"div",6),b.ac(18,"\n        "),b.Kb(19,"h1",7),b.ac(20,"\n          Listagem de Guich\xeas\n        "),b.Jb(),b.ac(21,"\n      "),b.Jb(),b.ac(22,"\n      "),b.Kb(23,"div",6),b.ac(24,"\n        "),b.Kb(25,"button",8),b.ac(26,"\n          "),b.Ib(27,"i",9),b.ac(28," Cadastrar Guich\xea\n        "),b.Jb(),b.ac(29,"\n      "),b.Jb(),b.ac(30,"\n    "),b.Jb(),b.ac(31,"\n     "),b.Kb(32,"div",0),b.ac(33,"\n      "),b.Kb(34,"table",10),b.ac(35,"\n        "),b.Kb(36,"thead"),b.ac(37,"\n          "),b.Kb(38,"tr",11),b.ac(39,"\n            "),b.Kb(40,"th"),b.ac(41,"#"),b.Jb(),b.ac(42,"\n            "),b.Kb(43,"th"),b.ac(44,"Descri\xe7\xe3o"),b.Jb(),b.ac(45,"\n            "),b.Kb(46,"th"),b.ac(47,"A\xe7\xf5es"),b.Jb(),b.ac(48,"\n          "),b.Jb(),b.ac(49,"\n        "),b.Jb(),b.ac(50,"\n        "),b.Kb(51,"tbody"),b.ac(52,"\n          "),b.Zb(53,u,21,2,"tr",12),b.ac(54,"\n        "),b.Jb(),b.ac(55,"\n      "),b.Jb(),b.ac(56,"\n     "),b.Jb(),b.ac(57,"\n      "),b.ac(58,"\n    "),b.Kb(59,"div",13),b.ac(60,"\n    "),b.Kb(61,"div",14),b.ac(62,"\n      "),b.Kb(63,"div",15),b.ac(64,"\n        "),b.Kb(65,"div",16),b.ac(66,"\n          "),b.Kb(67,"h5",17),b.ac(68,"\n            Vamos l\xe1!\n          "),b.Jb(),b.ac(69,"\n          "),b.ac(70,"\n        "),b.Jb(),b.ac(71,"\n        "),b.Kb(72,"div",18),b.ac(73),b.Jb(),b.ac(74,"\n        "),b.Kb(75,"div",19),b.ac(76,"\n          "),b.Zb(77,h,5,0,"div",20),b.ac(78,"\n        "),b.Jb(),b.ac(79,"\n        "),b.Kb(80,"div",21),b.ac(81,"\n          "),b.Kb(82,"button",22),b.ac(83,"\n            "),b.Ib(84,"i",23),b.ac(85,"\xa0Fechar\n          "),b.Jb(),b.ac(86,"\n          "),b.Kb(87,"button",24),b.Rb("click",(function(){return a.onDelete()})),b.ac(88,"\n            "),b.Ib(89,"i",25),b.ac(90," \xa0Excluir\n          "),b.Jb(),b.ac(91,"\n        "),b.Jb(),b.ac(92,"\n      "),b.Jb(),b.ac(93,"\n    "),b.Jb(),b.ac(94,"\n  "),b.Jb(),b.ac(95,"\n  "),b.ac(96,"\n  "),b.Jb(),b.ac(97,"\n\n\n")),2&t&&(b.xb(53),b.Ub("ngForOf",a.guiches),b.xb(20),b.cc("\n            Deseja excluir o registro do guich\xea: ",a._descricao," ?\n        "),b.xb(4),b.Ub("ngIf",a.mostrarMens))},directives:[l.d,l.c,c.h,c.i],styles:[""]}),t})();function p(t,a){1&t&&(b.Kb(0,"div",25),b.Kb(1,"button",26),b.Kb(2,"span",27),b.ac(3,"\xd7"),b.Jb(),b.Jb(),b.ac(4," Opera\xe7\xe3o realizada com sucesso!!! "),b.Jb())}let f=(()=>{class t{constructor(t,a,e){this.fb=t,this.guicheService=a,this.route=e,this.mostrarMens=!1}ngOnInit(){const t=this.route.snapshot.params;null!=t.id&&this.guicheService.loadById(t.id).subscribe(t=>{this.updateGuicheForm(t)}),this.guicheForm=this.fb.group({id:[null,[]],descricao:["",[]]})}updateGuicheForm(t){this.guicheForm.patchValue(t)}onSumit(){this.guicheForm.valid&&this.guicheService.save(this.guicheForm.value).subscribe(t=>{this.mostrarMens=!0}),this.guicheForm.reset()}}return t.\u0275fac=function(a){return new(a||t)(b.Hb(n.b),b.Hb(d),b.Hb(l.a))},t.\u0275cmp=b.Bb({type:t,selectors:[["app-guiche-form"]],decls:38,vars:2,consts:[[1,"col-12"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","/"],["routerLink","/orgao"],[1,"breadcrumb-item","active"],["class","alert alert-success","role","alert",4,"ngIf"],[1,"row","mb-4"],[1,"col-md"],[1,"h3","border-left","pl-2"],["type","button","routerLink","/guiche",1,"btn","btn-warning","float-right"],[1,"fas","fa-backward"],["novalidate","",1,"needs-validation",3,"formGroup"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"form-row","col-md-12"],[1,"form-group","col-md-1"],["for","id"],["type","text","id","id","formControlName","id","readonly","",1,"form-control"],[1,"form-group","col-md-4"],["for","descricao"],["type","text","id","descricao","formControlName","descricao",1,"form-control"],["type","submit",1,"btn","btn-success","float-right","mt-2",3,"click"],[1,"fas","fa-save"],["role","alert",1,"alert","alert-success"],["type","button","data-dismiss","alert","aria-label","Fechar",1,"close"],["aria-hidden","true"]],template:function(t,a){1&t&&(b.Kb(0,"div",0),b.Kb(1,"nav"),b.Kb(2,"ol",1),b.Kb(3,"li",2),b.Kb(4,"a",3),b.ac(5,"In\xedcio"),b.Jb(),b.Jb(),b.Kb(6,"li",2),b.Kb(7,"a",4),b.ac(8,"Listagem"),b.Jb(),b.Jb(),b.Kb(9,"li",5),b.ac(10,"Guich\xea"),b.Jb(),b.Jb(),b.Jb(),b.Zb(11,p,5,0,"div",6),b.Kb(12,"div",7),b.Kb(13,"div",8),b.Kb(14,"h1",9),b.ac(15," Cadastro de Guich\xea "),b.Jb(),b.Jb(),b.Kb(16,"div",8),b.Kb(17,"button",10),b.Ib(18,"i",11),b.ac(19,"\xa0Voltar "),b.Jb(),b.Jb(),b.Jb(),b.Kb(20,"form",12),b.Kb(21,"div",13),b.Kb(22,"div",14),b.ac(23," Formul\xe1rio para cadastro de Org\xe3os "),b.Jb(),b.Kb(24,"div",15),b.Kb(25,"div",16),b.Kb(26,"div",17),b.Kb(27,"label",18),b.ac(28,"ID:"),b.Jb(),b.Ib(29,"input",19),b.Jb(),b.Kb(30,"div",20),b.Kb(31,"label",21),b.ac(32,"Descri\xe7\xe3o:"),b.Jb(),b.Ib(33,"input",22),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Jb(),b.Kb(34,"div"),b.Kb(35,"button",23),b.Rb("click",(function(){return a.onSumit()})),b.Ib(36,"i",24),b.ac(37," \xa0Salvar "),b.Jb(),b.Jb(),b.Jb()),2&t&&(b.xb(11),b.Ub("ngIf",a.mostrarMens),b.xb(9),b.Ub("formGroup",a.guicheForm))},directives:[l.d,c.i,l.c,n.n,n.g,n.d,n.a,n.f,n.c],styles:[""]}),t})();const J=[{path:"",component:m},{path:"new",component:f},{path:"editar/:id",component:f}];let g=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(a){return new(a||t)},imports:[[l.e.forChild(J)],l.e]}),t})(),K=(()=>{class t{}return t.\u0275mod=b.Fb({type:t}),t.\u0275inj=b.Eb({factory:function(a){return new(a||t)},imports:[[c.b,g,i.b,n.j]]}),t})()}}]);