function cargar_tbl_req(){   
    let tabla = document.getElementById("tbl_req");
    tabla.innerHTML = `
    <tr>
        <th>Id</th>
        <th>Cliente</th>
        <th>RUC</th>
        <th>Tipo</th>
        <th>Fecha</th>
        <th>Estado</th>          
        <th>Seleccionar</th>
    </tr>`;
    let id_cliente = document.getElementById("filtro_cliente").value;
    let id_tipo = document.getElementById("filtro_tipo").value;
    let id_estado = document.getElementById("filtro_estado").value;
    let lista = requerimientos.filter(x=>(x.cliente == id_cliente || id_cliente == 0) && (x.tipo == id_tipo || id_tipo == 0) && (x.estado == id_estado || id_estado == 0));
    for (const item of lista) {
        let cliente = empresas.find(x=>x.id == item.cliente);
        let estado = estados.find(x=>x.id == item.estado);
        tabla.insertAdjacentHTML('beforeend', `
        <tr>
            <td>${item.id}</td>
            <td>${cliente.rs}</td>
            <td>${cliente.ruc}</td>
            <td>${item.tipo}</td>
            <td>${item.fecha}</td>
            <td>${estado.nombre}</td>
            <td style="text-align:center"><img style="cursor:pointer" src="img/select.png" width="30" onclick="open_req(${item.id});" /></th>           
        </tr>        
        `);        
    }
}
function load_image(btn){
    btn.parentNode.querySelector('input[type="file"]').click();
}
function load_requerimientos(){    
    cargar_combo_empresa("filtro_cliente");
    cargar_combo_tipo("filtro_tipo");
    cargar_combo_estado("filtro_estado");
    cargar_tbl_req();
}

function open_req(id){
    open_view('modelo.html', ()=>{
        let req = requerimientos.find(x=>x.id == id);
        let cli = empresas.find(x=>x.id == req.cliente);
        document.getElementById("hdf_id").value = id;
        document.getElementById("txt_cliente").value = cli.rs;
        document.getElementById("txt_ruc").value = cli.ruc;
        document.getElementById("txt_tipo").value = req.tipo;
        document.getElementById("txt_fecha").value = req.fecha;
    });
}

function cargar_combo_empresa(elemid){
    let combo = document.getElementById(elemid);
    combo.innerHTML = "<option value='0'>[Seleccionar]</option>";
    for (const item of empresas) {        
        combo.insertAdjacentHTML('beforeend', `
        <option value="${item.id}">${item.ruc} ${item.rs}</option>
        `);        
    }
}
function cargar_combo_tipo(elemid){
    let combo = document.getElementById(elemid);
    combo.innerHTML = "<option value='0'>[Seleccionar]</option>";
    for (const item of tipos) {        
        combo.insertAdjacentHTML('beforeend', `
        <option value="${item.id}">${item.nombre}</option>
        `);        
    }
}
function cargar_combo_estado(elemid){
    let combo = document.getElementById(elemid);
    combo.innerHTML = "<option value='0'>[Seleccionar]</option>";
    for (const item of estados) {        
        combo.insertAdjacentHTML('beforeend', `
        <option value="${item.id}">${item.nombre}</option>
        `);        
    }
}
function cargar_combo_formateador(elemid){
    let combo = document.getElementById(elemid);
    combo.innerHTML = "<option value='0'>[Seleccionar]</option>";
    for (const item of formateadores) {        
        combo.insertAdjacentHTML('beforeend', `
        <option value="${item.id}">${item.nombre}</option>
        `);        
    }
}

function procesar(){
    document.querySelector(".loading").style.display = "block";
    setTimeout(() => {
        let id = document.getElementById("hdf_id").value;
        let req = requerimientos.find(x=>x.id == id);
        let cli = empresas.find(x=>x.id == req.cliente);
        let titulo = "";
        switch (req.tipo) {
            case "FT": titulo = "FACTURA ELECTRÓNICA"; break;
            case "BV": titulo = "BOLETA ELECTRÓNICA"; break;
            case "NC": titulo = "NOTA DE CRÉDITO"; break;      
        }
        let area = document.getElementById("txt_result");
        area.innerHTML = `
        ==================================================
                        ${titulo}
                            E002-00001
        ==================================================
        RUC : ${cli.ruc}
        RAZON SOCIAL : ${cli.rs}
        FECHA : ${req.fecha}

        CANT    PRODUC    PRECIO   SUBTOTAL   TOTAL
        __________________________________________________
        [CANT]  [PROD]    [PRECIO] [SUBT]     [TOTAL]


        __________________________________________________
                                        IGV    [IGV]
                                        NETO   [NETO]
        ==================================================
        `;
        document.querySelector(".loading").style.display = "none";
    }, 1200);    
}

function registrar(){    
    requerimientos.push({
        id: (requerimientos.length + 1).toString(),
        cliente: document.getElementById("new_cliente").value,
        tipo: document.getElementById("new_tipo").value,
        fecha: "2019-10-02",
        estado: "1",
        formateador: document.getElementById("new_formateador").value
    });
    cargar_tbl_req();
    $('#RegisterModal').modal('hide');
}
window.onload = () => {
    cargar_combo_empresa("new_cliente");
    cargar_combo_tipo("new_tipo");
    cargar_combo_formateador("new_formateador");
};
