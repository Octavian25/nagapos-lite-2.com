(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1175:function(a,t,e){"use strict";e.r(t);var n=e(19),i=e(20),r=e(50),s=e(22),o=e(21),c=e(0),d=e.n(c),l=e(42),u=e(75),p=e(11),h=e(38),m=e(29),b=e.n(m),f=e(43),k=e(52),E=e(13),K=e(90),j=e(287),v=e(288),D=e(24),O=e(91),g=e(709),y=[{value:"KADAR-CETAK",name:"KADAR-CETAK"},{value:"KADAR-BELI",name:"KADAR-BELI"},{value:"KADAR-JUAL",name:"KADAR-JUAL"}],S=function(a){Object(s.a)(e,a);var t=Object(o.a)(e);function e(a){var i;return Object(n.a)(this,e),(i=t.call(this,a)).state={aktif:!1},i}return Object(i.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var a=this;return d.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off",onKeyPress:function(a){"Enter"===a.key&&a.preventDefault()}},d.a.createElement("div",{className:"form-group"},d.a.createElement(j.a,{id:"type_kadar",label:"Type Kadar",name:"type_kadar",options:y,value:this.props.type_kadar,disabled:this.props.isEdit,onBlur:function(){return a.setState({aktif:!0})},placeholder:"Silahkan Pilih Type Kadar",component:D.f})),d.a.createElement(j.a,{id:"kadar",tabIndex:"1",name:"kadar",component:D.e,type:"text",label:"Kadar",normalize:O.c,onBlur:function(){return a.setState({aktif:!0})},placeholder:"Masukan Kadar"}),d.a.createElement("div",{className:"row"},d.a.createElement("div",{className:"col-12 text-right"},d.a.createElement("button",{className:"btn btn-white",onClick:function(){return a.props.dispatch(Object(p.Cb)())},type:"button",disabled:this.props.isLoading},"Batal"),"\xa0",d.a.createElement("button",{tabIndex:"2",className:this.state.aktif?"btn btn-primary":"btn btn-white",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?d.a.createElement(d.a.Fragment,null,d.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan"):"Simpan Data"))))}}]),e}(c.Component);S=Object(v.a)({form:"ModalKadar",enableReinitialize:!0,validate:g.a})(S);var A=Object(h.b)(function(a){if(null!==a.datamaster.ShowModalDataKadar)return{initialValues:{kadar:a.datamaster.ShowModalDataKadar.kadar,type_kadar:a.datamaster.ShowModalDataKadar.type_kadar}}},null)(S),M=e(208),w=function(a,t,e){b.a.fire({html:"Apakah Anda Yakin Ingin Menghapus <h1><b>Kadar "+a+"</b> ?</h1>",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(n){n.isConfirmed&&Object(E.b)("kadar/delete/"+a+"&"+t,{data:{kadar:a,type_kadar:t}}).then(function(){Object(f.d)("Data Berhasil Di Hapus").then(function(){return e(Object(p.qb)())})}).catch(function(a){Object(f.e)("error",a.response.data)})})},_=function(a){Object(s.a)(e,a);var t=Object(o.a)(e);function e(a){var i;return Object(n.a)(this,e),(i=t.call(this,a)).state={isEdit:!1,modalDialog:!1,isLoading:!1,columns:[{dataField:"kadar",text:"Kadar"},{dataField:"type_kadar",text:"Type Kadar"},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(a,t){return d.a.createElement("div",{className:"row text-center"},d.a.createElement("div",{className:"col-12"},d.a.createElement("button",{onClick:function(){return w(t.kadar,t.type_kadar,i.props.dispatch)},className:"btn btn-danger"},d.a.createElement("i",{className:"fa fa-trash"}))))}}]},i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i}return Object(i.a)(e,[{key:"componentDidMount",value:function(){this.props.dispatch(Object(p.qb)())}},{key:"handleSubmit",value:function(a){var t=this;if(this.setState({isLoading:!0}),void 0===a.type_kadar)return b.a.fire({title:"Oopss!! ",text:"Type Kadar Harus Dipilih !!!",icon:"info"}),this.setState({isLoading:!1}),!1;var e={kadar:a.kadar},n={kadar:a.kadar,type_kadar:a.type_kadar};this.state.isEdit?Object(E.m)("jenis/edit/by-kode-jenis/"+a.kadar,e).then(function(){t.props.dispatch(Object(p.Cb)())}).then(function(){return Object(f.e)("success","Data Berhasil Diedit")}).then(function(){t.props.dispatch(Object(p.qb)())}).then(function(){t.setState({isLoading:!1})}).then(function(){t.props.dispatch(Object(k.e)("ModalKadar"))}).catch(function(a){Object(f.e)("info","Terjadi Kesalahan Saat Mengirim Data"),t.setState({isLoading:!1})}):Object(E.h)("kadar/add",n).then(function(){t.props.dispatch(Object(p.Cb)())}).then(function(){return Object(f.e)("success","Data Berhasil Disimpan")}).then(function(){t.props.dispatch(Object(p.qb)())}).then(function(){t.props.dispatch(Object(k.e)("ModalKadar"))}).then(function(){t.setState({isLoading:!1})}).catch(function(a){return t.ErrorHandling(a)})}},{key:"ErrorHandling",value:function(a){this.setState({isLoading:!1}),Object(f.a)(a)}},{key:"formEditKadar",value:function(a){this.props.dispatch(Object(p.Db)()),this.props.dispatch(Object(p.W)(a)),this.setState({isEdit:!0})}},{key:"ShowModalDataKadar",value:function(){this.props.dispatch(Object(p.Db)()),this.props.dispatch(Object(p.W)(!1)),this.setState({isEdit:!1})}},{key:"render",value:function(){var a=this;return d.a.createElement("div",null,d.a.createElement("ol",{className:"breadcrumb float-xl-right"},d.a.createElement("li",{className:"breadcrumb-item"},d.a.createElement(l.b,{to:"#"},"Data Master")),d.a.createElement("li",{className:"breadcrumb-item active"},"Master Kadar")),d.a.createElement("h1",{className:"page-header"},"Master Kadar "),d.a.createElement(u.a,null,d.a.createElement(u.c,null,"Master Kadar"),d.a.createElement("br",null),d.a.createElement("div",{className:"container"},d.a.createElement(K.a,{keyField:"kondisi",tambahData:!0,handleClick:function(){return a.ShowModalDataKadar()},exportCsv:!0,data:this.props.DataKadar,columns:this.state.columns,empty:this.props.DataKadar,textEmpty:"Data Kadar Kosong"})),d.a.createElement("br",null),d.a.createElement(M.a,{title:this.state.isEdit?"Edit Data Kadar":"Tambah Data Kadar",size:"P",content:d.a.createElement(A,{isLoading:this.state.isLoading,isEdit:this.state.isEdit,onSubmit:function(t){return a.handleSubmit(t)}})})))}}]),e}(d.a.Component);t.default=Object(h.b)(function(a){return{DataKadar:a.datamaster.getDataKadar,hideModal:a.datamaster.modalDialog}},null)(_)},709:function(a,t,e){"use strict";t.a=function(a,t){var e={};return a.kode_group||(e.kode_kategori="Kode Kategori Tidak Boleh Kosong"),a.kode_jenis||(e.kode_jenis="Kode Jenis Tidak Boleh Kosong"),a.nama_jenis||(e.nama_jenis="Nama Jenis Tidak Boleh Kosong"),e}}}]);
//# sourceMappingURL=37.4b781713.chunk.js.map