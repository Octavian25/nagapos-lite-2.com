(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1123:function(e,t,a){"use strict";a.r(t);var l=a(19),n=a(20),r=a(50),o=a(22),c=a(21),s=a(0),i=a.n(s),m=a(42),d=a(7),g=a(43),u=a(75),E=a(13),b=a(38),h=a(287),p=a(288),S=a(24),v=a(90),k=a(125),O=a.n(k),f=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(n.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(O.a,{id:"test-table-xls-button",className:"btn btn-success btn-block",table:"table-to-xls",filename:"Laporan Batal Service",sheet:"Laporan Batal Service",buttonText:"Export Exel"}),i.a.createElement("table",{id:"table-to-xls",style:{display:"none"}},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5",style:{textAlign:"center"}}," ","LAPORAN BATAL SERVICE"," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5"}," Periode ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5"}," ",0===Object(d.l)("tgl_laporan").length?null:JSON.parse(Object(d.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.l)("tgl_laporan")).tgl_akhir," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5"}," TOKO : ",Object(d.j)().nama_toko," ")),i.a.createElement("tr",null,i.a.createElement("th",{colSpan:"5"}," ALAMAT : ",Object(d.j)().alamat_toko," ")),i.a.createElement("tr",null),i.a.createElement("tr",null,i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NO SERVICE"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"TGL TRANSAKSI"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000"}},"NAMA CUSTOME"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ALAMAT"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"SALES"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"DESKRIPSI"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"BERAT"),i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"right"}},"ONGKOS"))),i.a.createElement("tbody",null,this.props.data.map(function(e,t){return i.a.createElement(i.a.Fragment,null,i.a.createElement("tr",{key:t},i.a.createElement("td",null,e.no_faktur_service),i.a.createElement("td",null,e.tgl_system),i.a.createElement("td",null,e.nama_customer),i.a.createElement("td",null,e.alamat_customer),i.a.createElement("td",null,e.kode_sales),i.a.createElement("td",null,e.detail_barang.deskripsi),i.a.createElement("td",null,e.detail_barang.berat.toFixed(2)),i.a.createElement("td",null,e.detail_barang.ongkos.toLocaleString("kr-KO"))))})),i.a.createElement("tfoot",null,i.a.createElement("tr",null,i.a.createElement("td",{style:{backgroundColor:"#E8E5E5",color:"#000",textAlign:"center"},colSpan:"8"},"Total Transaksi ",this.props.data.length)))))}}]),a}(s.Component),_=a(102),x=(a(207),function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=(arguments.length>1&&void 0!==arguments[1]&&arguments[1],arguments.length>2&&void 0!==arguments[2]&&arguments[2],arguments.length>3&&void 0!==arguments[3]&&arguments[3],new _.default("l","mm",[297,210])),l=[],n=30;a.setFontSize(15),a.text("LAPORAN SERVICE BATAL",14,15),a.setFontSize(20),a.text(Object(d.j)().nama_toko,200,15),a.setFontSize(8);var r=Object(d.j)().alamat_toko.length;r>20&&a.text(Object(d.j)().alamat_toko.slice(0,48),200,20),r>50&&a.text(Object(d.j)().alamat_toko.slice(48,90),200,25),a.setFontSize(10),a.setProperties({title:"LAPORAN SERVICE BATAL"}),a.text("PERIODE : ".concat(0===Object(d.l)("tgl_laporan").length?null:JSON.parse(Object(d.l)("tgl_laporan")).tgl_awal+" s/d "+JSON.parse(Object(d.l)("tgl_laporan")).tgl_akhir),14,25),e=[[{content:"NO SERVICE"},{content:"TGL TRANSAKSI"},{content:"NAMA CUSTOMER"},{content:"SALES"},{content:"DESKRIPSI"},{content:"BERAT",styles:{halign:"right"}},{content:"QTY",styles:{halign:"right"}},{content:"ONGKOS",styles:{halign:"right"}}]];var o=0;t.forEach(function(e,t){o+=e.detail_barang.ongkos;var a=[e.no_faktur_service,e.tgl_system,e.nama_customer,e.alamat_customer,e.kode_sales,e.detail_barang.deskripsi,{content:e.detail_barang.berat.toFixed(3),styles:{halign:"right"}},{content:parseInt(e.detail_barang.ongkos).toLocaleString("kr-KO"),styles:{halign:"right"}}];l.push(a)});var c=[{content:"Total Transaksi: ".concat(t.length),colSpan:8,styles:{halign:"center",fillColor:"#E8E5E5",textColor:"#000"}},{content:parseInt(o).toLocaleString("kr-KO"),styles:{halign:"right",fillColor:"#E8E5E5",textColor:"#000"}}];l.push(c);var s=[{content:"Printed By ".concat(JSON.parse(Object(d.l)("userdata")).user_id," / ").concat(Object(d.i)()),colSpan:7,styles:{fontStyle:"italic",textColor:"#000"}}];l.push(s),a.autoTable({head:e,body:l,startY:n,theme:"plain",rowPageBreak:"avoid",margin:{top:10},footStyles:{fontSize:8},bodyStyles:{fontSize:8},headStyles:{fontSize:8,fillColor:"#E8E5E5",textColor:"#000"},tableLineColor:[255,255,255],tableLineWidth:1}),n=a.autoTableEndPosY()+3,l=[];var i=a.internal.getNumberOfPages(),m=a.internal.pageSize.width,g=a.internal.pageSize.height;a.setFontSize(10);for(var u=1;u<i+1;u++){var E=m/2,b=g-10;a.setPage(u),a.text("".concat(u," of ").concat(i),E,b,{align:"center"})}a.save("LAPORAN SERVICE BATAL.pdf")}),y=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={date:new Date,columns:[{dataField:"no_faktur_service",text:"No Service",footerAttrs:{colSpan:"8"},footer:function(e,t,a,l){return i.a.createElement("div",null,"Total Transaksi : ",n.props.dataservices.length," ")}},{dataField:"tgl_system",text:"Tgl Transaksi"},{dataField:"nama_customer",text:"Nama Customer"},{dataField:"alamat_customer",text:"Alamat"},{dataField:"kode_sales",text:"Sales"},{dataField:"detail_barang.deskripsi",text:"Deskripsi"},{dataField:"detail_barang.berat",text:"Berat",headerClasses:"text-right",formatter:function(e){return i.a.createElement("div",{className:"text-right"},e.toFixed(2))}},{dataField:"detail_barang.ongkos",text:"Ongkos",headerClasses:"text-right",formatter:function(e){return i.a.createElement("div",{className:"text-right"},e.toLocaleString("kr-KO"))}}]},n.setStartDate=n.setStartDate.bind(Object(r.a)(n)),n.setLastDate=n.setLastDate.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"exportPdf",value:function(){x(this.props.dataservices)}},{key:"setStartDate",value:function(e){this.setState({tgl_awal:new Date(e)})}},{key:"setLastDate",value:function(e){this.setState({tgl_akhir:new Date(e)})}},{key:"render",value:function(){var e=this;return i.a.createElement("form",{onSubmit:this.props.handleSubmit,autoComplete:"off"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(h.a,{id:"tgl_awal",name:"tgl_awal",component:S.c,label:"Tanggal Dari",type:"text",selected:this.state.tgl_awal,onChange:function(t){return e.setStartDate(t)},placeholder:"Masukan Tanggal Dari"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement(h.a,{name:"tgl_akhir",component:S.c,type:"text",selected:this.state.tgl_akhir,onChange:function(t){return e.setLastDate(t)},label:"Tanggal Akhir",placeholder:"Masukan Tanggal Akhir"})),i.a.createElement("div",{className:"col-lg-4"},i.a.createElement("div",{className:"text-right"},i.a.createElement("label",null,"\xa0"),i.a.createElement("button",{type:"submit",value:"PDF",name:"type_btn",className:"btn btn-primary btn-block"},this.props.isLoading?i.a.createElement(i.a.Fragment,null,i.a.createElement("i",{className:"fas fa-spinner fa-spin"})," \xa0 Sedang Mencari"):"Cari Laporan"))),i.a.createElement("div",{className:"col-lg-12"},i.a.createElement(v.a,{keyField:"no_hp",data:this.props.export?this.props.dataservices:[],columns:this.state.columns,empty:!0,textEmpty:"Data Laporan Batal Service Kosong"})),i.a.createElement("div",{className:this.props.export?"col-lg-12":"col-lg-12 d-none"},i.a.createElement("label",{htmlFor:""},"\xa0"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-6"},i.a.createElement("button",{type:"button",onClick:function(){return e.exportPdf()},className:"btn btn-warning btn-block"}," Export PDF ")),i.a.createElement("div",{className:"col-lg-6"},i.a.createElement(f,{data:this.props.dataservices}))))))}}]),a}(s.Component);y=Object(p.a)({form:"HeadFormBatalService",enableReinitialize:!0})(y);var A=Object(b.b)(function(e){return{initialValues:{tgl_awal:Object(d.h)(),tgl_akhir:Object(d.h)()}}})(y),j=a(103),L=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={isLoading:!1,export:!1,dataservices:[]},n.handleSubmit=n.handleSubmit.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"handleSubmit",value:function(e){var t=this;this.setState({isLoading:!0});var a={tgl_awal:Object(d.e)(j(new Date(e.tgl_awal)).format("YYYY-MM-DD")),tgl_akhir:Object(d.e)(j(new Date(e.tgl_akhir)).format("YYYY-MM-DD"))};Object(E.j)("service/get/servicebatal",a).then(function(e){0===e.data.length?(Object(g.e)("info","Data Yang Anda Cari Tidak Ada"),t.setState({export:!1,isLoading:!1,dataservices:[]})):(Object(g.e)("success","Laporan Batal Service Tersedia"),Object(d.m)("tgl_laporan",JSON.stringify(a)),t.setState({export:!0,isLoading:!1,dataservices:e.data}))}).catch(function(e){t.setState({export:!1,isLoading:!1}),Object(g.e)("info","Data Yang Anda Cari Tidak Ada")})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("ol",{className:"breadcrumb float-xl-right"},i.a.createElement("li",{className:"breadcrumb-item"},i.a.createElement(m.b,{to:"#"},"Laporan")),i.a.createElement("li",{className:"breadcrumb-item active"},"Laporan Batal Services")),i.a.createElement("h1",{className:"page-header"},"Laporan Batal Services "),i.a.createElement(u.a,null,i.a.createElement(u.c,null,"Laporan Batal Services"),i.a.createElement("br",null),i.a.createElement(u.b,null,i.a.createElement(A,{export:this.state.export,isLoading:this.state.isLoading,dataservices:this.state.dataservices,onSubmit:function(t){return e.handleSubmit(t)}})),i.a.createElement("br",null)))}}]),a}(i.a.Component);t.default=L}}]);
//# sourceMappingURL=102.543a4476.chunk.js.map