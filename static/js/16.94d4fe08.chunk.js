(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{1111:function(e,a,t){"use strict";t.r(a);var n=t(19),r=t(20),l=t(50),o=t(22),i=t(21),s=t(0),c=t.n(s),m=t(38),u=t(42),p=t(52),b=t(288),d=t(11),h=t(142),v=t(7),f=t(208),_=t(43),g=t(90),y=t(75),S=t(13),k=t(287),E=t(24),O=t(126),j=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoading:!1,isLoadingBatal:!1,FormModal:""},r.setStartDate=r.setStartDate.bind(Object(l.a)(r)),r.setLastDate=r.setLastDate.bind(Object(l.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(k.a,{name:"tgl_awal",component:E.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(a){return e.setStartDate(a)},placeholder:"Masukan Tanggal Dari",onFocus:function(){return setTimeout(function(){HideKeyboard.postMessage("")},100)}})),c.a.createElement("div",{className:"col-lg-4"},c.a.createElement(k.a,{name:"tgl_akhir",component:E.c,type:"text",selected:this.state.tgl_akhir,onChange:function(a){return e.setLastDate(a)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir",onFocus:function(){return setTimeout(function(){HideKeyboard.postMessage("")},100)}})),c.a.createElement("div",{className:"col-4"},c.a.createElement("label",null," \xa0"),c.a.createElement("button",{className:"btn btn-primary btn-block",disabled:this.props.isLoading,type:"submit"},this.props.isLoading?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Services"))))}}]),t}(s.Component);j=Object(b.a)({form:"HeadLihatServices",enableReinitialize:!0,validate:O.a})(j);var N=Object(m.b)(function(e){return{setTransaksiServices:e.services.setTransaksiServices,DataSales:e.datamaster.getDataSales,hideModal:e.datamaster.modalDialog,initialValues:{tgl_awal:Object(v.h)(),tgl_akhir:Object(v.h)()}}})(j),x=t(2),I=t(650),A=Object(x.w)({prefix:"Rp. ",locale:"kr-KO"}),C=[{value:"CASH",name:"CASH"},{value:"DEBET",name:"DEBET"},{value:"TRANSFER",name:"TRANSFER"},{value:"CREDIT",name:"CREDIT"}],M=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoading:!1,type_pembayaran:"CASH",columns:[{dataField:"type",text:"Type",footerAttrs:{colSpan:"1"},footer:"Grand Total"},{dataField:"Total",text:"Total",footer:""}]},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){var a=Object(x.j)(document.getElementById("grand_total_pembayaran").value),t=Object(x.j)(document.getElementById("total_dp").value);e.props.change("harus_bayar_rp",parseInt(a)-parseInt(t))},100),this.props.dispatch(Object(d.ub)());var a=JSON.parse(localStorage.getItem("data_service_barang"));this.props.change("total_dp",a.dp_rp),this.props.change("grand_total_pembayaran",a.total),this.props.change("harus_bayar_rp",a.total),this.props.change("jenis","CASH")}},{key:"hitungTotal",value:function(){this.props.change("kembali",this.props.kembali),this.props.change("nominal_kembali",this.props.nominal_kembali)}},{key:"pilihPembyaran",value:function(e){"CASH"===e?this.setState({type_pembayaran:"CASH"}):"TRANSFER"===e?this.setState({type_pembayaran:"TRANSFER"}):"DEBET"===e?this.setState({type_pembayaran:"DEBET"}):this.setState({type_pembayaran:"CREDIT"}),this.props.change("cash","")}},{key:"copyValue",value:function(e){this.props.change("cash",parseInt(Object(x.j)(e)))}},{key:"render",value:function(){var e=this;return x.n.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-4"},x.n.createElement(x.c,Object.assign({id:"grand_total_pembayaran",name:"grand_total_pembayaran",component:x.p,type:"text",onChange:this.hitungTotal(),readOnly:!0},A,{label:"Total Harga Jual",placeholder:"Total Harga Jual"}))),x.n.createElement("div",{className:"col-4"},x.n.createElement(x.c,Object.assign({id:"total_dp",name:"total_dp",component:x.p,type:"text",onChange:this.hitungTotal(),readOnly:!0},A,{label:"Total Dp",placeholder:"Total Dp"}))),x.n.createElement("div",{className:"col-4"},x.n.createElement(x.c,Object.assign({id:"harus_bayar_rp",name:"harus_bayar_rp",component:x.p,type:"text",onChange:this.hitungTotal(),readOnly:!0},A,{label:"Harus Bayar Rp",placeholder:"Harus Bayar Rp"}))),x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,{name:"jenis",label:"Pilih Jenis Bayar",placeholder:"Pilih Jenis Pembayaran",options:C,onChange:function(a){return e.pilihPembyaran(a)},component:x.q})),x.n.createElement("div",{className:"col-6",style:{display:"CASH"===this.state.type_pembayaran?"none":(this.state.type_pembayaran,"block")}},x.n.createElement(x.c,{tabIndex:"1",name:"nama_bank",id:"nama_bank",component:x.p,type:"text",label:"Bank",placeholder:"Masukan Nama Bank"})),x.n.createElement("div",{className:"col-6",style:{display:"CASH"===this.state.type_pembayaran?"none":"DEBET"===this.state.type_pembayaran?"none":"block"}},x.n.createElement(x.c,{tabIndex:"1",name:"no_card",id:"no_card",component:x.p,type:"text",normalize:x.j,label:"TRANSFER"===this.state.type_pembayaran?"No Rek":"Card No",placeholder:"TRANSFER"===this.state.type_pembayaran?"Masukan No Rek":"Masukan Card No"})),x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,Object.assign({tabIndex:"1",name:"cash",id:"cash_trx_penjualan",component:x.p,type:"text",label:"Nominal",onChange:this.hitungTotal()},A,{normalize:x.j,placeholder:"Masukan Nominal"}))),x.n.createElement("div",{className:"col-6",style:{display:"CREDIT"===this.state.type_pembayaran?"block":"none"}},x.n.createElement(x.c,{tabIndex:"1",name:"fee",id:"fee",component:x.p,type:"text",label:"Fee (%)",normalize:x.j,placeholder:"5"})),x.n.createElement("div",{className:"col-6 d-none"},x.n.createElement(x.c,{tabIndex:"1",id:"nominal_kembali",name:"nominal_kembali",component:x.p,type:"text",label:"Nominal",placeholder:"Masukan Nominal"})),x.n.createElement("div",{className:"col-6"},x.n.createElement(x.c,{name:"kembali",id:"sisa_bayar",component:x.p,type:"text",readOnly:!0,label:"Sisa",onFocus:function(a){return e.copyValue(a.target.value)},placeholder:"Sisa Pembayaran"})),x.n.createElement("div",{className:"CASH"===this.state.type_pembayaran?"col-6 text-right":"TRANSFER"===this.state.type_pembayaran?"col-6 text-right":"col-12 text-right"},x.n.createElement("br",null),x.n.createElement("label",null,"\xa0"),x.n.createElement("button",{tabIndex:"2",className:"btn btn-primary"}," ",x.n.createElement("i",{className:"fa fa-plus"})))))}}]),t}(x.b);M=Object(x.O)({form:"HeadInputPembayaran",enableReinitialize:!0,validate:I.a})(M);var T=Object(x.x)("HeadInputPembayaran"),F=Object(x.u)(function(e){var a=T(e,"grand_total_pembayaran","harus_bayar_rp","cash"),t=a.harus_bayar_rp,n=a.cash,r=JSON.parse(localStorage.getItem("trx_pemabayran_service"))||[],l=0;r.forEach(function(e){l=e.nominal+l});var o=parseFloat(l||0)-parseFloat(t||0);return{kembali:o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),nominal_cash:n,nominal_kembali:o+parseInt(n)}})(M),w=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoading:!1,type_pembayaran:"CASH",kembalian:"",columns:[{dataField:"jenis",text:"Jenis",footerAttrs:{colSpan:"2"},footer:"Grand Total"},{dataField:"keterangan",text:"Keterangan"},{dataField:"nominal",text:"Total",formatter:function(e){return x.n.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"action",text:"Action",csvExport:!1,headerClasses:"text-center",formatter:function(e,a,t){return x.n.createElement("div",{className:"row text-center"},x.n.createElement("div",{className:"col-12"},x.n.createElement("button",{type:"button",disabled:"DP-SERVICE"===a.keterangan,onClick:function(){return r.hapusdata(t)},className:"btn btn-danger mr-3"},x.n.createElement("i",{className:"fa fa-trash"}))))},footer:""}]},r}return Object(r.a)(t,[{key:"hapusdata",value:function(e){var a=this;x.r.fire({title:"Anda Yakin !!",text:"Ingin Menghapus Data Ini ?",icon:"warning",position:"top-center",cancelButtonText:"Tidak",showCancelButton:!0,confirmButtonText:"OK",showConfirmButton:!0}).then(function(t){if(t.isConfirmed){var n=Object(x.D)("trx_pemabayran_service");n.splice(e,1),Object(x.Q)("trx_pemabayran_service",n),a.setState({status:"berhasil"})}})}},{key:"simpanPembayaran",value:function(e){if(void 0===e.no_card&&"CASH"!==e.jenis&&"DEBET"!==e.jenis)return Object(x.t)("info","Nomor kartu tidak boleh kosong"),!1;if(void 0===e.nama_bank&&"CASH"!==e.jenis)return Object(x.t)("info","Nama Bank tidak boleh kosong"),!1;if(void 0===e.cash||"0"===e.cash)return Object(x.t)("info","Nominal tidak boleh kosong"),!1;var a={total_transaksi:e.harus_bayar_rp,sisa_bayar:e.nominal_kembali};Object(x.Q)("sisa_bayar_service",a);var t=JSON.parse(localStorage.getItem("trx_pemabayran_service"))||[];if("CASH"===e.jenis||t.length){if("CASH"!==e.jenis){if(e.kembali.replace(/[^0-9]/g,"")-e.cash<0&&0!==parseInt(e.kembali))return Object(x.t)("info","Pembayaran tidak boleh lebih dari sisa"),!1;if(t.reduce(function(e,a){return e+a.nominal},0)>=e.harus_bayar_rp)return Object(x.t)("info","Pembayaran Sudah Cukup"),!1}}else if(e.kembali.replace(/[^0-9]/g,"")-e.cash<0)return Object(x.t)("info","Pembayaran tidak boleh lebih dari sisa"),!1;if(t.findIndex(function(e){return"CASH"===e.jenis})>=0){if(e.kembali.replace(/[^0-9]/g,"")-e.cash<0&&t.reduce(function(e,a){return e+a.nominal},0)>e.harus_bayar_rp)return Object(x.t)("info","Pembayaran Sudah Cukup"),!1;if(t.reduce(function(e,a){return e+a.nominal},0)>=e.harus_bayar_rp)return Object(x.t)("info","Pembayaran Sudah Cukup"),!1}if(-1===t.findIndex(function(a){return a.jenis===e.jenis})){var n="";n="CASH"===e.jenis?"CASH":"TRANSFER"===e.jenis?e.no_card+" - "+e.nama_bank:e.nama_bank;var r={jenis:e.jenis,nominal:parseInt(e.cash),nama_bank:void 0!==e.nama_bank?e.nama_bank.toUpperCase():"-",no_card:e.no_card,fee:"CREDIT"===e.jenis&&e.fee||0,keterangan:n,kembali:e.nominal_kembali};t.push(r),this.setState({masuk:!0,kembalian:e.kembali}),Object(x.Q)("trx_pemabayran_service",t)}else{var l=Object(x.D)("trx_pemabayran_service");l=l.map(function(a){return a.jenis===e.jenis&&(a.nominal+=parseInt(e.cash)),a}),Object(x.Q)("trx_pemabayran_service",l),this.setState({status:!0,kembalian:e.kembalian})}}},{key:"render",value:function(){var e=this;return x.n.createElement(x.n.Fragment,null,x.n.createElement(F,{onSubmit:function(a){return e.simpanPembayaran(a)}}),x.n.createElement("hr",null),x.n.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},x.n.createElement(x.s,{keyField:"jenis",exportCsv:!1,data:Object(x.D)("trx_pemabayran_service")||[],columns:this.state.columns,empty:!0,pagination:"off",textEmpty:"Data Pembayaran Kosong"}),x.n.createElement("div",{className:"row"},x.n.createElement("div",{className:"col-12 text-right"},x.n.createElement("button",{className:"btn btn-primary",disabled:this.props.isLoadingPembayran,type:"submit"},this.props.isLoadingPembayran?x.n.createElement(x.n.Fragment,null,x.n.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Diproses"):"Bayar Sekarang")))))}}]),t}(x.b);w=Object(x.O)({form:"ModalPembayaran",enableReinitialize:!0,validate:I.a})(w);var L=Object(x.u)(function(e){var a=Object(x.D)("data_barang_penjualan_tmp")||[],t="PENJUALAN";return a.forEach(function(e){t="-"===e.no_titip_group?"PENJUALAN":"TITIPAN"}),{status:t}})(w),D=t(76),R=t(665),K=Object(D.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),B=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={date:new Date("Y-m-d"),columns:[{dataField:"nama_barang",text:"Nama Barang",footer:""},{dataField:"berat",text:"Berat",formatter:function(e){return c.a.createElement("span",null,parseFloat(e).toFixed(1))},footer:function(e){return parseFloat(e.reduce(function(e,a){return e+a},0)).toFixed(1)}},{dataField:"jumlah",text:"Jumlah",formatter:function(e){return c.a.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"ongkos",text:"Ongkos",formatter:function(e){return c.a.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"total",text:"Total Rp",formatter:function(e,a,t){return r.getTotal(t)},footer:function(e,a,t){return r.getTotalAll()}}]},r}return Object(r.a)(t,[{key:"getTotalAll",value:function(){var e=JSON.parse(localStorage.getItem("total_rp_service_ambil"))||[],a=0;return e.forEach(function(e,t){a+=e.jml}),parseInt(a).toLocaleString("kr-KO")}},{key:"getTotal",value:function(e){var a=JSON.parse(localStorage.getItem("total_rp_service_ambil"))||[],t={jml:parseInt(this.props.detail_barang[e].ongkos*this.props.detail_barang[e].jumlah)};return a.push(t),localStorage.setItem("total_rp_service_ambil",JSON.stringify(a)),parseInt(this.props.detail_barang[e].ongkos*this.props.detail_barang[e].jumlah).toLocaleString("kr-KO")}},{key:"render",value:function(){var e=this;return c.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement(k.a,{id:"no_faktur_services_ambil",name:"no_faktur_services",component:E.b,type:"hidden",readOnly:!0}),c.a.createElement(k.a,{name:"nama_customer",component:E.e,type:"text",readOnly:!0,label:"Nama Customer",placeholder:"Masukan Nama Customer"})),c.a.createElement("div",{className:"col-4"},c.a.createElement(k.a,{name:"alamat_customer",component:E.e,type:"text",readOnly:!0,label:"Alamat Customer",placeholder:"Masukan Alamat Customer"})),c.a.createElement("div",{className:"col-4"},c.a.createElement(k.a,{name:"no_hp",component:E.e,type:"text",readOnly:!0,label:"No Hp",placeholder:"Masukan No Hp"})),c.a.createElement("div",{className:"col-4"},c.a.createElement(k.a,{id:"total_bayar",name:"total_bayar",component:E.b,type:"hidden",readOnly:!0}),c.a.createElement(k.a,{id:"total_dp",name:"total_dp_pembayarn",component:E.b,type:"hidden",readOnly:!0}),c.a.createElement(k.a,Object.assign({id:"total_rp",name:"total_rp",component:E.e},K,{type:"text",label:"Total Rp",readOnly:!0}))),c.a.createElement("div",{className:"col-4"},c.a.createElement(k.a,Object.assign({name:"total_dp",component:E.e,type:"tel"},K,{label:"Total DP",readOnly:!0}))),c.a.createElement("div",{className:"col-4"},c.a.createElement(k.a,Object.assign({name:"sisa_rp",component:E.e,type:"tel"},K,{label:"Sisa Rp",readOnly:!0}))),c.a.createElement("div",{className:"col-3 d-none"},c.a.createElement(k.a,{defaultValue:this.state.date,id:"tgl_ambil",name:"tgl_ambil",component:E.e,type:"date",label:"Tanggal Ambil"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(g.a,{keyField:"nama_barang",exportCsv:!1,data:this.props.detail_barang,columns:this.state.columns,pagination:"off",empty:!0,textEmpty:"Data Barang Kosong"})),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{type:"button",onClick:this.props.back,className:"btn btn-primary btn-block"},c.a.createElement("i",{className:"fa fa-arrow-left"})," Kembali")),c.a.createElement("div",{className:"col-9"},0===JSON.parse(localStorage.getItem("sisa_bayar_service_ambil"))?c.a.createElement("button",{type:"submit",className:"btn btn-success btn-block"},"Service Ambil"):c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"button",onClick:function(){return e.props.showModalPembayaran()},className:"btn btn-success btn-block"},"Service Ambil")))),c.a.createElement("br",null))}}]),t}(s.Component);B=Object(b.a)({form:"ModalServicesAmbil",enableReinitialize:!0,validate:R.a})(B);var P=Object(m.b)(function(e){return localStorage.setItem("sisa_bayar_service_ambil",parseFloat(e.services.showModalServiceAmbil.total||0)-parseFloat(e.services.showModalServiceAmbil.dp_rp||0)||0),{detail_barang:e.services.showModalServiceAmbil.detail_barang,initialValues:{sisa_rp:parseFloat(e.services.showModalServiceAmbil.total||0)-parseFloat(e.services.showModalServiceAmbil.dp_rp||0)||0,no_faktur_services:e.services.showModalServiceAmbil.no_faktur_service,nama_customer:e.services.showModalServiceAmbil.nama_customer,alamat_customer:e.services.showModalServiceAmbil.alamat_customer,no_hp:e.services.showModalServiceAmbil.no_hp,total_dp_pembayarn:e.services.showModalServiceAmbil.dp_rp,total_dp:e.services.showModalServiceAmbil.dp_rp,total_rp:e.services.showModalServiceAmbil.total,total_bayar:e.services.showModalServiceAmbil.total,tgl_ambil:Object(v.i)()}}})(B),H=Object(D.createNumberMask)({prefix:"Rp. ",locale:"kr-KO"}),J=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={date:new Date("Y-m-d"),columns:[{dataField:"nama_barang",text:"Nama Barang",footer:""},{dataField:"berat",text:"Berat",formatter:function(e){return c.a.createElement("span",null,parseFloat(e).toFixed(1))},footer:function(e){return parseFloat(e.reduce(function(e,a){return e+a},0)).toFixed(1)}},{dataField:"jumlah",text:"Jumlah",formatter:function(e){return c.a.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"ongkos",text:"Ongkos",formatter:function(e){return c.a.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"total",text:"Total Rp",formatter:function(e,a,t){return r.getTotal(t)},footer:function(e,a,t){return r.getTotalAll()}}]},r}return Object(r.a)(t,[{key:"getTotalAll",value:function(){var e=JSON.parse(localStorage.getItem("total_rp_service_ambil"))||[],a=0;return e.forEach(function(e,t){a+=e.jml}),parseInt(a).toLocaleString("kr-KO")}},{key:"getTotal",value:function(e){var a=JSON.parse(localStorage.getItem("total_rp_service_ambil"))||[],t={jml:parseInt(this.props.detail_barang[e].ongkos*this.props.detail_barang[e].jumlah)};return a.push(t),localStorage.setItem("total_rp_service_ambil",JSON.stringify(a)),parseInt(this.props.detail_barang[e].ongkos*this.props.detail_barang[e].jumlah).toLocaleString("kr-KO")}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4"},c.a.createElement(k.a,{id:"no_faktur_services_ambil",name:"no_faktur_services",component:E.b,type:"hidden",readOnly:!0}),c.a.createElement(k.a,{name:"nama_customer",component:E.e,type:"text",readOnly:!0,label:"Nama Customer",placeholder:"Masukan Nama Customer"})),c.a.createElement("div",{className:"col-4"},c.a.createElement(k.a,{name:"alamat_customer",component:E.e,type:"text",readOnly:!0,label:"Alamat Customer",placeholder:"Masukan Alamat Customer"})),c.a.createElement("div",{className:"col-4"},c.a.createElement(k.a,{name:"no_hp",component:E.e,type:"text",readOnly:!0,label:"No Hp",placeholder:"Masukan No Hp"})),c.a.createElement("div",{className:"col-3"},c.a.createElement(k.a,{id:"total_bayar",name:"total_bayar",component:E.b,type:"hidden",readOnly:!0}),c.a.createElement(k.a,Object.assign({id:"total_rp",name:"total_rp",component:E.e},H,{type:"text",label:"Total Rp",readOnly:!0}))),c.a.createElement("div",{className:"col-3"},c.a.createElement(k.a,Object.assign({name:"total_dp",component:E.e,type:"tel"},H,{label:"Total DP",readOnly:!0}))),c.a.createElement("div",{className:"col-3"},c.a.createElement(k.a,Object.assign({name:"sisa_rp",component:E.e,type:"tel"},H,{label:"Sisa Rp",readOnly:!0}))),c.a.createElement("div",{className:"col-3"},c.a.createElement(k.a,{defaultValue:this.state.date,id:"tgl_ambil",name:"tgl_ambil",component:E.e,type:"date",label:"Tanggal Ambil"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(g.a,{keyField:"nama_barang",exportCsv:!1,data:this.props.detail_barang,columns:this.state.columns,pagination:"off",empty:!0,textEmpty:"Data Barang Kosong"})),c.a.createElement("div",{className:"col-3"},c.a.createElement("button",{type:"button",onClick:this.props.back,className:"btn btn-primary btn-block"},c.a.createElement("i",{className:"fa fa-arrow-left"})," Kembali")),c.a.createElement("div",{className:"col-9"},0===JSON.parse(localStorage.getItem("sisa_bayar_service_ambil"))?c.a.createElement("button",{type:"submit",className:"btn btn-success btn-block"},"Batal Service"):c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{type:"submit",className:"btn btn-success btn-block"},"Batal Service")))),c.a.createElement("br",null))}}]),t}(s.Component);J=Object(b.a)({form:"ModalServicesBatal",enableReinitialize:!0,validate:R.a})(J);var V=Object(m.b)(function(e){return localStorage.setItem("sisa_bayar_service_ambil",parseFloat(e.services.showModalServiceAmbil.total||0)-parseFloat(e.services.showModalServiceAmbil.dp_rp||0)||0),{detail_barang:e.services.showModalServiceAmbil.detail_barang,initialValues:{sisa_rp:parseFloat(e.services.showModalServiceAmbil.total||0)-parseFloat(e.services.showModalServiceAmbil.dp_rp||0)||0,no_faktur_services:e.services.showModalServiceAmbil.no_faktur_service,nama_customer:e.services.showModalServiceAmbil.nama_customer,alamat_customer:e.services.showModalServiceAmbil.alamat_customer,no_hp:e.services.showModalServiceAmbil.no_hp,total_dp:e.services.showModalServiceAmbil.dp_rp,total_rp:e.services.showModalServiceAmbil.total,total_bayar:e.services.showModalServiceAmbil.total,tgl_ambil:Object(v.i)()}}})(J),z=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={columns:[{dataField:"nama_barang",text:"Nama Barang",footer:""},{dataField:"berat",text:"Berat",formatter:function(e){return c.a.createElement("span",null,parseFloat(e).toFixed(1))},footer:function(e){return parseFloat(e.reduce(function(e,a){return e+a},0)).toFixed(1)}},{dataField:"jumlah",text:"Jumlah",formatter:function(e){return c.a.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"ongkos",text:"Ongkos",formatter:function(e){return c.a.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"total",text:"Total Rp",formatter:function(e,a,t){return r.getTotal(t)},footer:function(e,a,t){return r.getTotalAll()}}]},r}return Object(r.a)(t,[{key:"getTotalAll",value:function(){var e=JSON.parse(localStorage.getItem("total_rp_services"))||[],a=0;return e.forEach(function(e,t){a+=e.jml}),parseInt(a).toLocaleString("kr-KO")}},{key:"getTotal",value:function(e){var a=JSON.parse(localStorage.getItem("total_rp_services"))||[],t={jml:parseInt(this.props.detail_barang[e].ongkos*this.props.detail_barang[e].jumlah)};return a.push(t),localStorage.setItem("total_rp_services",JSON.stringify(a)),parseInt(this.props.detail_barang[e].ongkos*this.props.detail_barang[e].jumlah).toLocaleString("kr-KO")}},{key:"render",value:function(){return c.a.createElement("form",{onSubmit:this.props.handleSubmit,onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()},autoComplete:"off"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement(k.a,{name:"no_faktur_services",component:E.b,type:"hidden",readOnly:!0}),c.a.createElement(k.a,{name:"nama_customer",component:E.e,type:"text",readOnly:!0,label:"Nama Customer",placeholder:"Masukan Nama Cistomer"})),c.a.createElement("div",{className:"col-6"},c.a.createElement(k.a,{name:"alamat_customer",component:E.e,type:"text",readOnly:!0,label:"Nama Customer",placeholder:"Masukan Alamat Cistomer"})),c.a.createElement("div",{className:"col-6"},c.a.createElement(k.a,{name:"no_hp",component:E.e,type:"number",label:"No Hp",readOnly:!0,placeholder:"Masukan No Hp"})),c.a.createElement("div",{className:"col-12"},c.a.createElement(g.a,{keyField:"nama_barang",exportCsv:!1,data:this.props.detail_barang,columns:this.state.columns,pagination:"off",empty:!0,textEmpty:"Data Barang Kosong"})),c.a.createElement("div",{className:"col-12"},c.a.createElement("button",{type:"submit",disabled:this.props.isLoadingServicesSelesai,className:"btn btn-primary btn-block"},this.props.isLoadingServicesSelesai?c.a.createElement(c.a.Fragment,null,c.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Menyimpan Data"):"Service Selesai"))))}}]),t}(s.Component);z=Object(b.a)({form:"ModalServicesSelesai",enableReinitialize:!0,validate:R.a})(z);var Y=Object(m.b)(function(e){return{detail_barang:e.services.showModalServiceSelesai.detail_barang,initialValues:{no_faktur_services:e.services.showModalServiceSelesai.no_faktur_service,nama_customer:e.services.showModalServiceSelesai.nama_customer,alamat_customer:e.services.showModalServiceSelesai.alamat_customer,no_hp:e.services.showModalServiceSelesai.no_hp,tgl_selesai:Object(v.i)()}}})(z),G=t(103),U=t(28),Q=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var r;return Object(n.a)(this,t),(r=a.call(this,e)).state={isLoadingServicesSelesai:!1,isLoading:!1,dataservices:[],FormModal:"",pembayaran:!1,columns:[{dataField:"no_faktur_service",text:"No Faktur",footerAttrs:{colSpan:"4"},footer:"Total"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"alamat_customer",text:"Alamat Customer"},{dataField:"no_hp",text:"No Hp"},{dataField:"dp_rp",text:"Dp Rp",formatter:function(e){return c.a.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"total",text:"Total Rp",formatter:function(e){return c.a.createElement("span",null,parseInt(e).toLocaleString("kr-KO"))},footer:function(e){return parseInt(e.reduce(function(e,a){return e+a},0)).toLocaleString("kr-KO")}},{dataField:"selesai",text:"Selesai",csvExport:!1,headerClasses:"text-center",formatter:function(e,a,t){return c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-12"},"OPEN"===a.status_proses?c.a.createElement("button",{type:"button","data-tooltip":"Service Selesai",onClick:function(){return r.showModalServiceSelesai(a)},className:"btn btn-success "},c.a.createElement("i",{className:"fas fa-check"})):null,"DONE"===a.status_proses?c.a.createElement("button",{type:"button","data-tooltip":"Service Ambil",onClick:function(){return r.showModalServiceAmbil(a)},className:"btn btn-warning"},c.a.createElement("i",{className:"fa fa-file-export"})):null,"OPEN"===a.status_proses||"DONE"===a.status_proses?c.a.createElement(c.a.Fragment,null," ",c.a.createElement("br",null),c.a.createElement("br",null)," "):c.a.createElement(c.a.Fragment,null),c.a.createElement("button",{type:"button","data-tooltip":"Service Batal",onClick:function(){return r.showBatalServices(a)},className:"btn btn-danger"},c.a.createElement("i",{className:"fa fa-window-close"})),"\xa0",c.a.createElement("button",{type:"button","data-tooltip":"Reprint Service",onClick:function(){return r.Reprint(a)},className:"btn btn-secondary"},c.a.createElement("i",{className:"fa fa-print"}))))},footer:""}]},r.handleSubmit=r.handleSubmit.bind(Object(l.a)(r)),r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){localStorage.setItem("total_rp_services",JSON.stringify([])),this.context.handleSetPageSidebar(!1),this.context.handleSetPageHeader(!1),!1===this.state.pembayaran&&(Object(v.p)("sisa_bayar_service",[]),Object(v.p)("trx_pemabayran_service",[]))}},{key:"showBatalServices",value:function(e){localStorage.setItem("total_rp_service_ambil",JSON.stringify([])),this.setState({FormModal:"SERVICE_BATAL",pembayaran:!0}),this.props.dispatch(Object(h.e)(e))}},{key:"Reprint",value:function(e){var a={no_faktur_service:e.no_faktur_service};Object(S.h)("service/get/bynota",a).then(function(e){for(var a=[],t=0;t<2;t++){var n="";e.data.notaservice.forEach(function(e,a){var t=e.n_alamat_customer.length;n+="========================================\n",n+="             NOTA SERVICE               \n",n+="========================================\nTanggal          : ".concat(e.tgl_system,"\nKode Sales       : ").concat(e.kode_sales,"\nNama Customer    : ").concat(e.nama_customer,"\nNo Hp            : ").concat(e.no_hp,"\nAlamat Customer  : ").concat(e.n_alamat_customer.slice(0,20),"\nTotal Service    : ").concat(e.total_service.toLocaleString("kr-KO"),"\n"),t>20&&(n+="      ".concat(e.n_alamat_customer.slice(20,40),"\n")),t>40&&(n+="      ".concat(e.n_alamat_customer.slice(40,60),"\n")),n+="========================================\n",n+="Keterangan\n",n+="========================================\n";var r=0;e.detail_barang.forEach(function(a,t){r+=a.ongkos;var l=a.deskripsi.length;a.harga_nota,n+="Nama Barang      : ".concat(a.nama_barang,"\n"),n+="Berat            : ".concat(a.berat.toFixed(3),"\n"),n+="Jumlah           : ".concat(a.jumlah.toLocaleString("kr-KO"),"\n"),n+="Ongkos           : ".concat(a.ongkos.toLocaleString("kr-KO"),"\n"),n+="deskripsi        : ".concat(a.deskripsi.slice(0,20),"\n"),l>20&&(n+="                   ".concat(e.deskripsi.slice(20,40))),l>40&&(n+="                   ".concat(e.deskripsi.slice(40,60))),n+="========================================\n"}),n+="Total Ongkos     : ".concat(r.toLocaleString("kr-KO"),"\n"),n+="========================================\n",n+="                               TTD      \n",n+="                                        \n",n+="                                        \n",n+="                                        \n",n+="                         (             )\n",n+="                                        \n",n+="                                        \n",n+="                                        \n"}),a.push(n)}document.getElementById("myInput").value=a.join("")}).then(function(){console.log("masuk");var e=document.createElement("a"),a=new Blob([document.getElementById("myInput").value],{type:"text/plain;charset=utf-8"});e.href=URL.createObjectURL(a),e.download="autoprint_service.txt",document.body.appendChild(e),e.click()}).catch(function(e){})}},{key:"handleSubmit",value:function(e){var a=this,t={tgl_awal:Object(v.e)(G(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(v.e)(G(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};this.setState({isLoading:!0}),Object(S.h)("service/get/by-tanggal",t).then(function(e){Object(v.m)("tgl_laporan",JSON.stringify(t)),0===e.data.length?(Object(_.e)("info","Data Services Tidak Ada"),a.setState({isLoading:!1,dataservices:[]})):(Object(_.e)("success","Data Services Tersedia"),a.setState({isLoading:!1,dataservices:e.data}))}).catch(function(e){return a.errorhandling(e)})}},{key:"errorhandling",value:function(e){this.setState({isLoading:!1,dataservices:[]}),Object(_.e)("info",void 0===e.response?"Terjadi Kesalahan Saat Request Data":e.response.data)}},{key:"showModalServiceSelesai",value:function(e){this.props.dispatch(Object(d.Db)()),this.props.dispatch(Object(h.f)(e)),this.setState({pembayaran:!1})}},{key:"showModalPembayaran",value:function(){if(""===document.getElementById("tgl_ambil").value)return Object(_.e)("info","Tanggal Ambil Harus Diisi"),!1;this.props.dispatch(Object(d.Db)())}},{key:"showModalServiceAmbil",value:function(e){Object(v.p)("data_service_barang",e),localStorage.setItem("total_rp_service_ambil",JSON.stringify([])),this.setState({FormModal:"SERVICE_AMBIL",pembayaran:!0}),this.props.dispatch(Object(h.e)(e))}},{key:"simpanServicesSelesai",value:function(e){var a=this;this.setState({isLoadingServicesSelesai:!0});var t={no_faktur_service:e.no_faktur_services,tgl_selesai:e.tgl_selesai};Object(S.h)("service/selesai",t).then(function(e){Object(_.d)(e.data),a.setState({isLoadingServicesSelesai:!1}),a.props.dispatch(Object(p.e)("ModalServicesSelesai"))}).then(function(){a.getLaporan()}).then(function(){a.props.dispatch(Object(d.Cb)()),localStorage.setItem("total_rp_services",JSON.stringify([]))}).catch(function(e){a.setState({isLoadingServicesSelesai:!1}),Object(_.e)("info","Data Services Gagal Disimpan")})}},{key:"getLaporan",value:function(){var e=this,a=Object(v.g)("tgl_laporan"),t={tgl_awal:a.tgl_awal,tgl_akhir:a.tgl_akhir};Object(S.h)("service/get/by-tanggal",t).then(function(a){0===a.data.length?e.setState({isLoading:!1,dataservices:[]}):e.setState({isLoading:!1,dataservices:a.data})}).catch(function(a){return e.setState({isLoading:!1,dataservices:[]})})}},{key:"simpanServicesAmbil",value:function(e){var a=this;this.setState({isLoadingServicesSelesai:!0});var t=document.getElementById("no_faktur_services_ambil").value,n=parseInt(document.getElementById("total_bayar").value),r=parseInt(document.getElementById("total_dp").value),l=Object(v.g)("trx_pemabayran_service"),o=[],i="";l.forEach(function(e){var a={bank:"CASH"!==e.jenis?e.nama_bank:"CASH",jenis:e.jenis,keterangan:e.keterangan,fee:"CREDIT"===e.jenis&&parseInt(e.fee)||0,jumlah_rp:"CASH"===e.jenis?parseInt(e.nominal)-parseInt(Object(v.g)("sisa_bayar_service").sisa_bayar):parseInt(e.nominal)};i=e.nominal+i,o.push(a)});var s={no_faktur_service:t,tgl_ambil:"2021-01-01",total:n,pembayaran:o};if(parseInt(n)-r>parseInt(i)){var c=parseInt(n)-r-parseInt(i);return Object(_.e)("info","Pembayaran Masih Kurang "+parseInt(c).toLocaleString("kr-KO")),!1}Object(S.h)("service/ambil",s).then(function(e){a.setState({isLoadingServicesSelesai:!1}),Object(_.d)(e.data)}).then(function(){a.setState({isLoadingServicesSelesai:!1}),a.props.dispatch(Object(p.e)("ModalPembayaran"))}).then(function(){a.setState({isLoadingServicesSelesai:!1}),a.getLaporan()}).then(function(){a.props.dispatch(Object(d.Cb)()),a.setState({FormModal:"",pembayaran:!1,dataservices:[],isLoadingServicesSelesai:!1}),Object(v.p)("sisa_bayar_service",[]),Object(v.p)("sisa_bayar_service_ambil",[]),Object(v.p)("trx_pemabayran_service",[]),Object(v.p)("total_rp_service_ambil",[]),Object(v.p)("data_service_barang",[])}).catch(function(e){a.setState({isLoadingServicesSelesai:!1}),Object(_.e)("info","Data Services Gagal Disimpan")})}},{key:"simpanServicesBatal",value:function(e){var a=this,t={no_faktur_service:e.no_faktur_services};Object(S.h)("service/batal",t).then(function(e){Object(_.d)(e.data)}).then(function(){a.props.dispatch(Object(p.e)("ModalPembayaran"))}).then(function(){a.props.dispatch(Object(d.Cb)()),a.setState({FormModal:"",pembayaran:!1,dataservices:[]})}).then(function(){a.getLaporan()}).catch(function(e){Object(_.e)("info","Data Services Gagal Disimpan")})}},{key:"back",value:function(){localStorage.setItem("total_rp_service_ambil",JSON.stringify([])),this.setState({FormModal:""}),this.setState({pembayaran:!1}),Object(v.p)("sisa_bayar_service",[]),Object(v.p)("trx_pemabayran_service",[])}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(u.b,{to:"/SubMenuService"},c.a.createElement("button",{type:"button",className:"btn btn-secondary","data-tut":"reactour_4"},c.a.createElement("i",{className:"fa fa-angle-left mr-3","aria-hidden":"true"})," Home")),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(y.a,null,c.a.createElement("textarea",{style:{display:"none"},id:"myInput",rows:"100",cols:"100"}),c.a.createElement(y.c,null,"Lihat Services"),c.a.createElement("br",null),c.a.createElement("div",{className:"container"},"SERVICE_AMBIL"===this.state.FormModal?c.a.createElement(P,{showModalPembayaran:function(){return e.showModalPembayaran()},back:function(){return e.back()},onSubmit:function(a){return e.simpanServicesAmbil(a)}}):"SERVICE_BATAL"===this.state.FormModal?c.a.createElement(V,{back:function(){return e.back()},onSubmit:function(a){return e.simpanServicesBatal(a)}}):c.a.createElement(c.a.Fragment,null,c.a.createElement(N,{onSubmit:function(a){return e.handleSubmit(a)},isLoading:this.state.isLoading}),c.a.createElement(g.a,{keyField:"no_faktur_group",exportCsv:!1,data:this.state.dataservices,columns:this.state.columns,empty:!0,textEmpty:"Data Barang Kosong"})))),c.a.createElement(f.a,{title:c.a.createElement(q,{state:this.state.pembayaran}),size:this.state.pembayaran?"P":"xl",content:!0===this.state.pembayaran?c.a.createElement(L,{onSubmit:function(a){return e.simpanServicesAmbil(a)}}):c.a.createElement(Y,{isLoadingServicesSelesai:this.state.isLoadingServicesSelesai,onSubmit:function(a){return e.simpanServicesSelesai(a)}})}))}}]),t}(c.a.Component);function q(e,a){return!0===e.state?"Form Pembayaran Service Ambil":"Form Services Selesai"}Q.contextType=U.a,Q=Object(b.a)({form:"LihatServices",enableReinitialize:!0})(Q);a.default=Object(m.b)(function(e){return{hideModal:e.datamaster.modalDialog}},null)(Q)},650:function(e,a,t){"use strict";a.a=function(e){var a={};return e.jenis||(a.jenis="Jenis Tidak Boleh Kosong"),a}},665:function(e,a,t){"use strict";a.a=function(e){var a={};return e.tgl_selesai||(a.tgl_selesai="Tanggal Selesai Tidak Boleh Kosong"),e.tgl_ambil||(a.tgl_ambil="Tanggal Tidak Boleh Kosong"),a}}}]);
//# sourceMappingURL=16.94d4fe08.chunk.js.map