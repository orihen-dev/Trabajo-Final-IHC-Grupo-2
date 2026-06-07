/* ============================================
   DATA
============================================ */
const medicamentos = [
  { id:1, nombre:"Paracetamol 500mg", lab:"Laboratorio Nacional", registro:"EN-0123456", lote:"T1234567", vencimiento:"12/2026", forma:"Tabletas", via:"Oral", composicion:"Paracetamol 500mg", condiciones:"Mantener en lugares frescos y secos, menor a 30°C", indicaciones:"Alivio del dolor leve a moderado y fiebre", contraindicaciones:"Hipersensibilidad al paracetamol", estado:"autentico", verificaciones:5 },
  { id:2, nombre:"Ibuprofeno 400mg", lab:"Pharma Plus", registro:"EN-0456789", lote:"I2024ABC", vencimiento:"08/2025", forma:"Tabletas", via:"Oral", composicion:"Ibuprofeno 400mg", condiciones:"Conservar a temperatura ambiente", indicaciones:"Analgésico y antiinflamatorio", contraindicaciones:"Úlcera gástrica activa", estado:"advertencia", verificaciones:2 },
  { id:3, nombre:"Amoxicilina 875mg", lab:"Medicamentos SA", registro:"NO REGISTRADO", lote:"ACEU73-FAKE", vencimiento:"Desconocido", forma:"Tabletas", via:"Oral", composicion:"Desconocida", condiciones:"Desconocidas", indicaciones:"No verificado", contraindicaciones:"No verificado", estado:"riesgo", verificaciones:1 },
  { id:4, nombre:"Vitamina C 500mg", lab:"Nutri Health", registro:"EN-0789012", lote:"V3456789", vencimiento:"06/2027", forma:"Tabletas efervescentes", via:"Oral", composicion:"Ácido ascórbico 500mg", condiciones:"Conservar en lugar seco", indicaciones:"Suplemento vitamínico", contraindicaciones:"Ninguna conocida", estado:"autentico", verificaciones:8 },
  { id:5, nombre:"Metformina 850mg", lab:"Lab Genfar S.A.C", registro:"EN-0234567", lote:"M5678901", vencimiento:"03/2026", forma:"Tabletas", via:"Oral", composicion:"Metformina HCl 850mg", condiciones:"Temperatura ambiente", indicaciones:"Tratamiento de diabetes tipo 2", contraindicaciones:"Insuficiencia renal grave", estado:"autentico", verificaciones:3 },
];

const alertasData = [
  { id:1, nombre:"Paracetamol 875mg", lab:"Gete S.A.C", lote:"E2324", fecha:"26/10/2024", tipo:"riesgo", descripcion:"Se ha identificado la comercialización de este producto con registro sanitario falsificado. No consumir.", entidad:"DIGEMID", recomendaciones:["No consumir este producto","Verificar siempre el registro sanitario","Comprar en establecimientos autorizados"] },
  { id:2, nombre:"Ibuprofeno 400mg", lab:"Geis S.A.C", lote:"E2324", fecha:"26/10/2024", tipo:"advertencia", descripcion:"Medicamento con posibles irregularidades en la composición. Se recomienda precaución.", entidad:"DIGEMID", recomendaciones:["Consultar a su médico antes de usar","Verificar el número de lote"] },
  { id:3, nombre:"Amoxilina 875mg", lab:"Geis S.A.C", lote:"E2324", fecha:"25/10/2024", tipo:"riesgo", descripcion:"Producto retirado del mercado por incumplimiento de especificaciones técnicas.", entidad:"DIGEMID", recomendaciones:["Devolver el producto al establecimiento","No consumir el producto","Reportar a DIGEMID"] },
  { id:4, nombre:"Metformina 1000mg", lab:"Lab ABC", lote:"M9876", fecha:"20/10/2024", tipo:"falsificado", descripcion:"Se han detectado unidades falsificadas en circulación. El empaque original tiene diferencias notables.", entidad:"DIGEMID", recomendaciones:["No adquirir este producto","Denunciar a DIGEMID si lo encuentra"] },
  { id:5, nombre:"Diclofenaco 50mg", lab:"Pharma Mix", lote:"D1234", fecha:"15/10/2024", tipo:"advertencia", descripcion:"Alerta por posible contaminación en lotes específicos. Verificar número de lote.", entidad:"DIGEMID", recomendaciones:["Verificar número de lote antes de consumir","Consultar al farmacéutico"] },
];

const historialData = [
  { id:1, med_id:1, fecha:"Hoy, 10:30 am" },
  { id:2, med_id:2, fecha:"Hoy, 8:11 am" },
  { id:3, med_id:3, fecha:"Ayer, 6:30 pm" },
  { id:4, med_id:4, fecha:"Ayer, 8:30 pm" },
];

const farmaciasData = [
  {
    id: 1,
    nombre: "InkaFarma",
    cadena: "inkafarma",
    direccion: "Av. Arequipa 1234, Lima",
    distancia: 0.6,
    abierto: true,
    horario: "Hasta 9:00 pm",
    rating: 4.6,
    opiniones: 128,
    emoji: "🏪",
    color: "#00a651",
    servicios: [
      { icon: "💊", label: "Venta de medicamentos" },
      { icon: "👨‍⚕️", label: "Orientación farmacéutica" },
      { icon: "💉", label: "Aplicación de inyectables" },
      { icon: "📏", label: "Medición de presión" },
      { icon: "🚚", label: "Entrega a domicilio" },
      { icon: "🙋", label: "Atención personalizada" },
    ],
    pin: { top: "30%", left: "25%" },
  },
  {
    id: 2,
    nombre: "MiFarma",
    cadena: "mifarma",
    direccion: "Jr. Lince 456, Lima",
    distancia: 1.1,
    abierto: true,
    horario: "Hasta 10:00 pm",
    rating: 4.3,
    opiniones: 94,
    emoji: "🏬",
    color: "#e63946",
    servicios: [
      { icon: "💊", label: "Venta de medicamentos" },
      { icon: "👨‍⚕️", label: "Orientación farmacéutica" },
      { icon: "🚚", label: "Entrega a domicilio" },
      { icon: "📏", label: "Medición de presión" },
    ],
    pin: { top: "50%", left: "55%" },
  },
  {
    id: 3,
    nombre: "Botica Torres",
    cadena: "botica",
    direccion: "Jr. Miraflores 789, Lima",
    distancia: 1.4,
    abierto: false,
    horario: "Abre mañana 8:00 am",
    rating: 4.1,
    opiniones: 42,
    emoji: "🏥",
    color: "#457b9d",
    servicios: [
      { icon: "💊", label: "Venta de medicamentos" },
      { icon: "💉", label: "Aplicación de inyectables" },
    ],
    pin: { top: "20%", left: "65%" },
  },
  {
    id: 4,
    nombre: "Farmacia Universal",
    cadena: "botica",
    direccion: "Av. Brasil 321, Lima",
    distancia: 1.8,
    abierto: true,
    horario: "Hasta 11:00 pm",
    rating: 4.4,
    opiniones: 67,
    emoji: "🏪",
    color: "#2d6a4f",
    servicios: [
      { icon: "💊", label: "Venta de medicamentos" },
      { icon: "👨‍⚕️", label: "Orientación farmacéutica" },
      { icon: "📏", label: "Medición de presión" },
      { icon: "🙋", label: "Atención personalizada" },
    ],
    pin: { top: "65%", left: "30%" },
  },
  {
    id: 5,
    nombre: "Botica San Juan",
    cadena: "botica",
    direccion: "Calle Los Olivos 55, Lima",
    distancia: 2.2,
    abierto: true,
    horario: "Hasta 9:00 pm",
    rating: 3.9,
    opiniones: 28,
    emoji: "💊",
    color: "#6d6875",
    servicios: [
      { icon: "💊", label: "Venta de medicamentos" },
    ],
    pin: { top: "40%", left: "80%" },
  },
  {
    id: 6,
    nombre: "Salud Total",
    cadena: "botica",
    direccion: "Av. Grau 900, Lima",
    distancia: 2.9,
    abierto: false,
    horario: "Abre mañana 9:00 am",
    rating: 4.2,
    opiniones: 53,
    emoji: "🏥",
    color: "#1b4332",
    servicios: [
      { icon: "💊", label: "Venta de medicamentos" },
      { icon: "👨‍⚕️", label: "Orientación farmacéutica" },
      { icon: "🚚", label: "Entrega a domicilio" },
    ],
    pin: { top: "75%", left: "70%" },
  },
];

let alertasFiltroActual = 'todas';
let historialFiltroActual = 'todos';
let farmaciasFiltradas = [...farmaciasData];
let farmaciaSeleccionada = null;
let filtrosActivos = {};
let vistaActual = 'ambas'; // 'lista', 'mapa', 'ambas'
let usuarioActual = { nombre: '', apellido: '', email: '', telefono: '', fechaNacimiento: '', genero: '' };
let isLoggedIn = false;
/* ============================================
   NAVEGACIÓN
============================================ */
function goTo(page, section = null) {
  // Guard: perfil solo accesible si hay sesión
  if (page === 'perfil' && !isLoggedIn) {
    showToast('Inicia sesión para acceder a tu perfil', 'error');
    openModal('loginModal');
    return;
  }
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + page);
  if (target) target.classList.add('active');

  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });

  window.scrollTo(0, 0);

  if (section) {
    setTimeout(() => {
      const el = document.getElementById('sec-' + section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  }

  if (page === 'alertas') renderAlertas();
  if (page === 'historial') { renderHistorial(); renderFrecuentes(); }
  if (page === 'farmacias') { renderFarmacias(); }
  if (page === 'perfil') showPerfilSection('mis-datos');
}

/* ============================================
   MODALS
============================================ */
function openModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.add('open'); document.body.style.overflow = 'hidden'; }
}
function closeModal(id) {
  const m = document.getElementById(id);
  if (m) { m.classList.remove('open'); document.body.style.overflow = ''; }
}
function switchModal(from, to) {
  closeModal(from);
  setTimeout(() => openModal(to), 150);
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

/* ============================================
   AUTH
============================================ */
function login() {
  const email = document.getElementById('loginEmail').value;
  const pass = document.getElementById('loginPass').value;
  if (!email || !pass) { showToast('Completa todos los campos', 'error'); return; }
  if (!email.includes('@')) { showToast('Correo inválido', 'error'); return; }
  closeModal('loginModal');
  showToast('¡Bienvenido de nuevo!', 'success');
  setLoggedIn('Juan Pérez', document.getElementById('loginEmail').value);
}
function register() {
  const nombre = document.getElementById('regNombre').value;
  const email = document.getElementById('regEmail').value;
  const pass = document.getElementById('regPass').value;
  const pass2 = document.getElementById('regPass2').value;
  const terms = document.getElementById('regTerms').checked;
  if (!nombre || !email || !pass) { showToast('Completa todos los campos', 'error'); return; }
  if (!email.includes('@')) { showToast('Correo inválido', 'error'); return; }
  if (pass.length < 6) { showToast('Contraseña mínimo 6 caracteres', 'error'); return; }
  if (pass !== pass2) { showToast('Las contraseñas no coinciden', 'error'); return; }
  if (!terms) { showToast('Acepta los términos y condiciones', 'error'); return; }
  closeModal('registerModal');
  showToast('¡Cuenta creada exitosamente!', 'success');
  const nombreCompleto = nombre + ' ' + document.getElementById('regApellido').value;
  usuarioActual = {
    nombre: nombre,
    apellido: document.getElementById('regApellido').value,
    email: email,
    telefono: document.getElementById('regTelefono').value,
    fechaNacimiento: document.getElementById('regFechaNac').value,
    genero: document.getElementById('regGenero').value
  };
  setLoggedIn(nombreCompleto.trim(), email);
}
function enviarReset() {
  const email = document.getElementById('forgotEmail').value;
  if (!email.includes('@')) { showToast('Ingresa un correo válido', 'error'); return; }
  closeModal('forgotModal');
  showToast('Instrucciones enviadas a tu correo', 'success');
}

/* ============================================
   BÚSQUEDA DE MEDICAMENTOS
============================================ */
function buscarMedicamento() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) { showToast('Ingresa un medicamento para buscar', 'error'); return; }
  const result = medicamentos.find(m => m.nombre.toLowerCase().includes(q) || m.registro.toLowerCase().includes(q) || m.lote.toLowerCase().includes(q));
  if (result) mostrarResultado(result);
  else showToast('Medicamento no encontrado en la base de datos', 'error');
}
function toggleManual() {
  const a = document.getElementById('manualInputArea');
  a.style.display = a.style.display === 'none' ? 'block' : 'none';
}
function verificarManual() {
  const code = document.getElementById('manualCode').value.trim().toLowerCase();
  if (!code) { showToast('Ingresa un código o nombre', 'error'); return; }
  const result = medicamentos.find(m => m.nombre.toLowerCase().includes(code) || m.lote.toLowerCase().includes(code));
  closeModal('scanModal');
  setTimeout(() => { if (result) mostrarResultado(result); else showToast('Medicamento no encontrado', 'error'); }, 300);
}

/* ============================================
   RESULTADO MEDICAMENTO
============================================ */
function mostrarResultado(med) {
  const content = document.getElementById('resultContent');
  let html = '';
  if (med.estado === 'autentico') {
    html = `<div class="result-autentico">
      <div class="result-icon">✅</div>
      <h2 style="color:var(--green);font-family:var(--font-display);font-size:2.5rem;letter-spacing:1px;margin-bottom:8px">Auténtico</h2>
      <p style="color:var(--gray-text);margin-bottom:20px">Este medicamento es original y está autorizado.</p>
      <div class="result-card"><h3>${med.nombre}</h3><div class="result-sub">${med.lab} &bull; <span style="background:#e8f5ee;color:var(--green);padding:2px 8px;border-radius:4px;font-size:0.75rem;font-weight:700">Auténtico</span></div></div>
      <div class="result-grid">
        <div class="result-field"><label>Registro Sanitario</label><strong>${med.registro}</strong></div>
        <div class="result-field"><label>Lote</label><strong>${med.lote}</strong></div>
        <div class="result-field"><label>Vencimiento</label><strong>${med.vencimiento}</strong></div>
        <div class="result-field"><label>Forma</label><strong>${med.forma}</strong></div>
        <div class="result-field"><label>Vía</label><strong>${med.via}</strong></div>
        <div class="result-field"><label>Composición</label><strong>${med.composicion}</strong></div>
      </div>
      <details style="margin-bottom:20px;cursor:pointer">
        <summary style="font-weight:700;font-size:0.9rem">Ver información completa</summary>
        <div style="font-size:0.85rem;color:#555;line-height:1.7;margin-top:8px">
          <p><strong>Almacenamiento:</strong> ${med.condiciones}</p>
          <p><strong>Indicaciones:</strong> ${med.indicaciones}</p>
          <p><strong>Contraindicaciones:</strong> ${med.contraindicaciones}</p>
        </div>
      </details>
      <div class="result-acciones">
        <button class="btn-primary full" onclick="closeModal('resultModal');goTo('farmacias')">🏪 Encontrar farmacia cercana</button>
        <button class="btn-outline full" onclick="closeModal('resultModal');showToast('Guardado en frecuentes','success')">💊 Guardar en frecuentes</button>
        <button class="btn-outline full" onclick="closeModal('resultModal');showToast('Compartido exitosamente','success')">📤 Compartir resultado</button>
      </div>
      <p style="font-size:0.75rem;color:#999;text-align:center;margin-top:16px">⚠️ Este resultado no reemplaza el consejo de un médico</p>
    </div>`;
  } else if (med.estado === 'advertencia') {
    html = `<div class="result-riesgo">
      <div class="result-icon">⚠️</div>
      <h2 style="color:var(--orange);font-family:var(--font-display);font-size:2rem;margin-bottom:8px">Advertencia</h2>
      <p style="color:var(--gray-text);margin-bottom:20px">Este medicamento requiere precaución al usar</p>
      <div class="result-card" style="border-color:#ff9800"><h3>${med.nombre}</h3><div class="result-sub">${med.lab}</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;text-align:left">
        <div><h4 style="font-size:0.9rem;font-weight:700;margin-bottom:8px">Precauciones</h4><ul style="font-size:0.85rem;color:#555;padding-left:16px;line-height:1.8"><li>Verificar fecha de vencimiento</li><li>Consultar al farmacéutico</li><li>No automedicarse</li></ul></div>
        <div><h4 style="font-size:0.9rem;font-weight:700;margin-bottom:8px">Recomendaciones</h4><ul style="font-size:0.85rem;color:#555;padding-left:16px;line-height:1.8"><li>Consulte a su médico</li><li>Compre en farmacias autorizadas</li><li>Guarde el comprobante</li></ul></div>
      </div>
      <div class="result-acciones">
        <button class="btn-primary full" onclick="closeModal('resultModal');goTo('farmacias')">🏪 Buscar farmacia autorizada</button>
        <button class="btn-outline full" onclick="closeModal('resultModal');openModal('scanModal')">🔁 Volver a escanear</button>
        <button class="btn-outline full" onclick="closeModal('resultModal');showToast('Reporte enviado a DIGEMID','success')">📋 Reportar problema</button>
      </div>
    </div>`;
  } else {
    html = `<div class="result-riesgo">
      <div class="result-icon">🚨</div>
      <h2 style="color:var(--red);font-family:var(--font-display);font-size:2rem;margin-bottom:8px">Riesgo alto</h2>
      <p style="color:var(--gray-text);margin-bottom:20px">Este medicamento está falsificado o no está autorizado</p>
      <div class="result-card" style="border-color:var(--red);background:#fdecea"><h3>${med.nombre}</h3><div class="result-sub">${med.lab}</div></div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;text-align:left">
        <div><h4 style="font-size:0.9rem;font-weight:700;margin-bottom:8px;color:var(--red)">Riesgo detectado</h4><ul style="font-size:0.85rem;color:#555;padding-left:16px;line-height:1.8"><li>Registro: <strong>${med.registro}</strong></li><li>Lote: ${med.lote}</li><li>Vencimiento: <strong>${med.vencimiento}</strong></li></ul></div>
        <div><h4 style="font-size:0.9rem;font-weight:700;margin-bottom:8px">Recomendaciones</h4><ul style="font-size:0.85rem;color:#555;padding-left:16px;line-height:1.8"><li>No consumir este producto</li><li>Verificar el registro sanitario</li><li>Comprar en farmacias autorizadas</li></ul></div>
      </div>
      <div class="result-acciones">
        <button class="btn-primary full" style="background:var(--red)" onclick="closeModal('resultModal');showToast('Alerta reportada a DIGEMID','success')">🚨 Reportar a DIGEMID</button>
        <button class="btn-outline full" onclick="closeModal('resultModal');goTo('farmacias')">🏪 Encontrar farmacia autorizada</button>
        <button class="btn-outline full" onclick="closeModal('resultModal');openModal('scanModal')">🔁 Volver a escanear</button>
      </div>
    </div>`;
  }
  content.innerHTML = html;
  openModal('resultModal');
}

/* ============================================
   ALERTAS
============================================ */
function renderAlertas() {
  const lista = document.getElementById('alertasList');
  if (!lista) return;
  const filtradas = alertasFiltroActual === 'todas' ? alertasData : alertasData.filter(a => a.tipo === alertasFiltroActual);
  lista.innerHTML = filtradas.map(a => `
    <div class="alerta-item" onclick="verAlerta(${a.id})">
      <div class="alerta-img">💊</div>
      <div class="alerta-info">
        <div class="alerta-nombre">${a.nombre}</div>
        <div class="alerta-sub">Lote ${a.lote} &bull; ${a.lab}</div>
        <div class="alerta-sub">${a.descripcion.substring(0,70)}...</div>
      </div>
      <div>
        <div class="alerta-badge ${a.tipo==='riesgo'?'badge-riesgo':a.tipo==='falsificado'?'badge-falsificado':'badge-advertencia'}">
          ${a.tipo==='riesgo'?'Riesgo alto':a.tipo==='falsificado'?'Falsificado':'Advertencia'}
        </div>
        <div class="alerta-fecha">${a.fecha}</div>
      </div>
    </div>`).join('');
}
function filtrarAlertas(tipo, btn) {
  alertasFiltroActual = tipo;
  document.querySelectorAll('#page-alertas .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAlertas();
}
function verAlerta(id) {
  const a = alertasData.find(x => x.id === id);
  if (!a) return;
  document.getElementById('resultContent').innerHTML = `
    <div>
      <div style="margin-bottom:20px"><span class="alerta-badge ${a.tipo==='riesgo'?'badge-riesgo':a.tipo==='falsificado'?'badge-falsificado':'badge-advertencia'}" style="padding:6px 16px;font-size:0.9rem">${a.tipo==='riesgo'?'🚨 Riesgo alto':a.tipo==='falsificado'?'🔴 Falsificado':'⚠️ Advertencia'}</span></div>
      <h2 style="font-family:var(--font-display);font-size:2rem;letter-spacing:1px;margin-bottom:8px">${a.nombre}</h2>
      <div class="result-sub" style="margin-bottom:20px">Laboratorio: ${a.lab} &bull; Lote: ${a.lote}</div>
      <p style="font-size:0.9rem;color:#555;line-height:1.7;margin-bottom:20px">${a.descripcion}</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:20px">
        <div class="result-field"><label>Fecha de publicación</label><strong>${a.fecha}</strong></div>
        <div class="result-field"><label>Entidad</label><strong>${a.entidad}</strong></div>
      </div>
      <div style="margin-bottom:20px"><h4 style="font-size:0.9rem;font-weight:700;margin-bottom:10px">Recomendaciones</h4><ul style="font-size:0.85rem;color:#555;padding-left:16px;line-height:1.9">${a.recomendaciones.map(r=>`<li>${r}</li>`).join('')}</ul></div>
      <button class="btn-primary full" onclick="closeModal('resultModal');showToast('Alerta compartida','success')">📤 Compartir alerta</button>
    </div>`;
  openModal('resultModal');
}

/* ============================================
   HISTORIAL
============================================ */
function renderHistorial() {
  const lista = document.getElementById('historialList');
  if (!lista) return;
  const filtrados = historialFiltroActual === 'todos' ? historialData : historialData.filter(h => {
    const m = medicamentos.find(x => x.id === h.med_id);
    return m && m.estado === historialFiltroActual;
  });
  lista.innerHTML = filtrados.map(h => {
    const m = medicamentos.find(x => x.id === h.med_id);
    if (!m) return '';
    const ec = m.estado==='autentico'?'badge-autentico':m.estado==='riesgo'?'badge-riesgo':'badge-advertencia';
    const el = m.estado==='autentico'?'✅ Auténtico':m.estado==='riesgo'?'🚨 Riesgo alto':'⚠️ Advertencia';
    return `<div class="historial-item" onclick='mostrarResultado(${JSON.stringify(m)})'>
      <div class="hist-img">💊</div>
      <div class="hist-info"><div class="hist-nombre">${m.nombre}</div><div class="hist-sub">${m.lab} &bull; ${h.fecha}</div></div>
      <div class="hist-estado ${ec}">${el}</div>
      <div class="hist-arrow">›</div>
    </div>`;
  }).join('');
}
function filtrarHistorial(tipo, btn) {
  historialFiltroActual = tipo;
  document.querySelectorAll('#page-historial .filters .filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderHistorial();
}
function buscarHistorial() {
  const q = document.getElementById('historialSearch').value.toLowerCase();
  document.querySelectorAll('#historialList .historial-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(q) ? 'flex' : 'none';
  });
}
function renderFrecuentes() {
  const lista = document.getElementById('frecuentesList');
  if (!lista) return;
  const frecuentes = medicamentos.filter(m => m.verificaciones > 2);
  lista.innerHTML = frecuentes.map(m => `
    <div class="historial-item" onclick='mostrarResultado(${JSON.stringify(m)})'>
      <div class="hist-img">💊</div>
      <div class="hist-info"><div class="hist-nombre">${m.nombre}</div><div class="hist-sub">${m.forma} &bull; ${m.lab}</div><div class="hist-sub" style="margin-top:2px">Verificado ${m.verificaciones} veces</div></div>
      <div class="hist-estado ${m.estado==='autentico'?'badge-autentico':'badge-riesgo'}">${m.estado==='autentico'?'✅ Auténtico':'🚨 Riesgo'}</div>
      <div class="hist-arrow">›</div>
    </div>`).join('');
}

/* ============================================
   FARMACIAS
============================================ */
function renderFarmacias(data) {
  const lista = document.getElementById('farmaciasList');
  if (!lista) return;
  const farmacias = data || farmaciasFiltradas;

  document.getElementById('farmaciaCount').textContent = `${farmacias.length} farmacia${farmacias.length !== 1 ? 's' : ''} encontrada${farmacias.length !== 1 ? 's' : ''}`;

  lista.innerHTML = farmacias.map(f => `
    <div class="farmacia-card" id="card-f${f.id}" onclick="seleccionarFarmacia(${f.id})">
      <div class="farmacia-thumb">${f.emoji}</div>
      <div class="farmacia-info">
        <div class="farmacia-nombre">${f.nombre}</div>
        <div class="farmacia-dir">📍 ${f.direccion}</div>
        <div class="farmacia-meta">
          <span class="farmacia-dist">📍 ${f.distancia} km</span>
          <span class="${f.abierto ? 'farmacia-abierto' : 'farmacia-cerrado'}">${f.abierto ? '● Abierto' : '● Cerrado'}</span>
          <span class="farmacia-horario">${f.horario}</span>
        </div>
        <div class="farmacia-meta" style="margin-top:4px">
          <span class="farmacia-stars">⭐ ${f.rating} <span>(${f.opiniones} opiniones)</span></span>
        </div>
        <div class="farmacia-card-footer">
          <button class="btn-card-sm btn-card-primary" onclick="event.stopPropagation();verDetalleFarmacia(${f.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
            Ver detalle
          </button>
          <button class="btn-card-sm btn-card-outline" onclick="event.stopPropagation();verRuta(${f.id})">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:13px;height:13px"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
            Cómo llegar
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Actualizar pines del mapa
  actualizarPinesMapa(farmacias);
}

function seleccionarFarmacia(id) {
  // Deseleccionar anterior
  document.querySelectorAll('.farmacia-card').forEach(c => c.classList.remove('selected'));
  document.querySelectorAll('.mapa-pin').forEach(p => p.classList.remove('active'));

  farmaciaSeleccionada = id;
  const card = document.getElementById(`card-f${id}`);
  if (card) {
    card.classList.add('selected');
    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
  const pin = document.querySelector(`.mapa-pin[data-id="${id}"]`);
  if (pin) pin.classList.add('active');
}

function seleccionarFarmaciaDesdePin(id) {
  seleccionarFarmacia(id);
  // En mobile podría mostrar detalle directamente
}

function actualizarPinesMapa(farmacias) {
  const ids = farmacias.map(f => f.id);
  document.querySelectorAll('.mapa-pin').forEach(pin => {
    const pinId = parseInt(pin.dataset.id);
    pin.style.display = ids.includes(pinId) ? 'block' : 'none';
  });
}

function filtrarFarmaciasSearch() {
  const q = document.getElementById('farmaciaSearch').value.toLowerCase();
  if (!q) {
    farmaciasFiltradas = [...farmaciasData];
  } else {
    farmaciasFiltradas = farmaciasData.filter(f =>
      f.nombre.toLowerCase().includes(q) || f.direccion.toLowerCase().includes(q)
    );
  }
  renderFarmacias();
}

/* Filtros */
function abrirFiltros() {
  openModal('filtrosModal');
}

function actualizarFiltro(tipo, valor) {
  filtrosActivos[tipo] = valor;
}

function aplicarFiltros() {
  closeModal('filtrosModal');

  // Filtrar según estado
  let resultado = [...farmaciasData];

  // Cadena
  const cadena = document.getElementById('filtroFarmaciaChain').value;
  if (cadena) resultado = resultado.filter(f => f.cadena === cadena);

  // 24h
  const solo24h = document.getElementById('toggle24h').checked;
  if (solo24h) resultado = resultado.filter(f => f.horario.toLowerCase().includes('24'));

  // Orden
  const orden = document.querySelector('input[name="orden"]:checked')?.value;
  if (orden === 'cercano') resultado.sort((a,b) => a.distancia - b.distancia);
  if (orden === 'calificacion') resultado.sort((a,b) => b.rating - a.rating);

  // Distancia
  const dist = document.querySelector('input[name="distancia"]:checked')?.value;
  if (dist && dist !== '0') resultado = resultado.filter(f => f.distancia <= parseFloat(dist));

  farmaciasFiltradas = resultado;
  renderFarmacias();
  renderFiltrosActivos();
  showToast(`${resultado.length} farmacia${resultado.length !== 1 ? 's' : ''} encontrada${resultado.length !== 1 ? 's' : ''}`, 'success');
}

function resetFiltros() {
  filtrosActivos = {};
  farmaciasFiltradas = [...farmaciasData];
  document.getElementById('filtroFarmaciaChain').value = '';
  document.getElementById('toggle24h').checked = false;
  document.querySelectorAll('input[name="distancia"]').forEach(r => r.checked = r.value === '3');
  document.querySelectorAll('input[name="orden"]').forEach(r => r.checked = r.value === 'precio');
  renderFiltrosActivos();
  renderFarmacias();
  showToast('Filtros restablecidos', '');
}

function renderFiltrosActivos() {
  const cont = document.getElementById('filtrosActivos');
  if (!cont) return;
  const tags = Object.entries(filtrosActivos).map(([k, v]) => `
    <div class="filtro-tag">
      ${v}
      <button onclick="removerFiltro('${k}')">✕</button>
    </div>
  `).join('');
  cont.innerHTML = tags;
}

function removerFiltro(tipo) {
  delete filtrosActivos[tipo];
  aplicarFiltrosSilencioso();
  renderFiltrosActivos();
}

function aplicarFiltrosSilencioso() {
  farmaciasFiltradas = [...farmaciasData];
  renderFarmacias();
}

/* Detalle de farmacia */
function verDetalleFarmacia(id) {
  const f = farmaciasData.find(x => x.id === id);
  if (!f) return;

  document.getElementById('detalleContent').innerHTML = `
    <div class="detalle-foto" style="font-size:4rem;text-align:center">${f.emoji}</div>
    <div class="detalle-header">
      <div class="detalle-header-info">
        <div class="detalle-nombre">${f.nombre}</div>
        <div class="detalle-dir">📍 ${f.direccion}</div>
      </div>
      <div class="detalle-acciones-top">
        <button class="btn-fav" onclick="showToast('Guardado en favoritos','success')">❤️</button>
        <button class="btn-share" onclick="showToast('Enlace copiado','success')">📤</button>
      </div>
    </div>
    <div class="detalle-meta">
      <span class="detalle-dist">📍 ${f.distancia} km</span>
      <span class="${f.abierto ? 'detalle-abierto' : ''}" style="${!f.abierto ? 'color:var(--red);font-weight:600;font-size:0.82rem' : ''}">${f.abierto ? '● Abierto' : '● Cerrado'}</span>
      <span class="detalle-horario">${f.horario}</span>
      <span class="detalle-stars">⭐ ${f.rating} <span>(${f.opiniones} opiniones)</span></span>
    </div>

    <div class="detalle-servicios-title">Servicios disponibles</div>
    <div class="detalle-servicios">
      ${f.servicios.map(s => `
        <div class="servicio-item">
          <span class="serv-icon">${s.icon}</span>
          ${s.label}
        </div>
      `).join('')}
    </div>

    <button class="btn-primary full" onclick="closeModal('detalleModal');verRuta(${f.id})">
      <span style="display:flex;align-items:center;justify-content:center;gap:8px">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        Cómo llegar
      </span>
    </button>
  `;
  openModal('detalleModal');
}

/* Ruta */
function verRuta(id) {
  const f = farmaciasData.find(x => x.id === id);
  if (!f) return;

  const mins = Math.round(f.distancia * 12); // ~5km/h caminar
  const minsAuto = Math.round(f.distancia * 3);
  const minsTrans = Math.round(f.distancia * 6);

  document.getElementById('rutaContent').innerHTML = `
    <div class="ruta-header">
      <h2>Cómo llegar</h2>
    </div>

    <div class="ruta-puntos">
      <div class="ruta-punto">
        <div class="ruta-punto-icon origen">📍</div>
        <div>
          <strong>Mi ubicación</strong>
          <span>Lima, Perú</span>
        </div>
      </div>
      <div class="ruta-punto">
        <div class="ruta-punto-icon destino">🏪</div>
        <div>
          <strong>${f.nombre}</strong>
          <span>${f.direccion}</span>
        </div>
      </div>
    </div>

    <div class="ruta-opciones">
      <div class="ruta-opcion active" onclick="seleccionarTransporte(this, ${minsAuto}, 'Auto')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        Auto
      </div>
      <div class="ruta-opcion" onclick="seleccionarTransporte(this, ${minsTrans}, 'Transporte')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M1 9h15"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="12.5" cy="18.5" r="2.5"/></svg>
        Transporte
      </div>
      <div class="ruta-opcion" onclick="seleccionarTransporte(this, ${mins}, 'A pie')">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="4" r="1"/><path d="M9 20l3-6.3L15 16l3-7"/><path d="M9 13l-3 5"/></svg>
        A pie
      </div>
    </div>

    <div class="ruta-mapa-mini">
      <div class="ruta-mapa-grid"></div>
      <div class="ruta-linea"></div>
      <div class="ruta-info">
        <div><span id="rutaMins">${minsAuto} min</span><small>Tiempo estimado</small></div>
        <div><span>${f.distancia} km</span><small>Distancia</small></div>
      </div>
    </div>
    <div class="ruta-trafico">
      🟢 Tráfico ligero en esta ruta
    </div>

    <button class="btn-primary full" onclick="showToast('Navegación iniciada hacia ${f.nombre}','success')">
      <span style="display:flex;align-items:center;justify-content:center;gap:8px">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>
        Iniciar navegación
      </span>
    </button>
  `;
  openModal('rutaModal');
}

function seleccionarTransporte(el, mins, label) {
  document.querySelectorAll('.ruta-opcion').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
  const minsEl = document.getElementById('rutaMins');
  if (minsEl) minsEl.textContent = mins + ' min';
}

/* Vista lista/mapa */
function setVista(vista) {
  const layout = document.querySelector('.farmacias-layout');
  layout.classList.remove('vista-lista-activa', 'vista-mapa-activa');

  document.getElementById('btnLista').classList.remove('active');
  document.getElementById('btnMapa').classList.remove('active');

  if (vista === 'lista') {
    layout.classList.add('vista-lista-activa');
    document.getElementById('btnLista').classList.add('active');
    vistaActual = 'lista';
  } else {
    layout.classList.add('vista-mapa-activa');
    document.getElementById('btnMapa').classList.add('active');
    vistaActual = 'mapa';
  }
}

/* Range dual */
function updateRange() {
  const min = parseInt(document.getElementById('rangeMin').value);
  const max = parseInt(document.getElementById('rangeMax').value);
  if (min > max) return;
  document.getElementById('precioMin').textContent = 'S/ ' + min;
  document.getElementById('precioMax').textContent = 'S/ ' + max;
  document.getElementById('rangeLabel').textContent = `Rango seleccionado: S/ ${min} - S/ ${max}`;
  const fill = document.getElementById('rangeFill');
  fill.style.left = min + '%';
  fill.style.right = (100 - max) + '%';
}

/* ============================================
   CONTACTO
============================================ */
function enviarContacto() {
  const nombre = document.getElementById('cNombre').value;
  const email = document.getElementById('cEmail').value;
  const msg = document.getElementById('cMensaje').value;
  if (!nombre || !email || !msg) { showToast('Completa todos los campos', 'error'); return; }
  showToast('¡Mensaje enviado! Te responderemos pronto.', 'success');
  document.getElementById('cNombre').value = '';
  document.getElementById('cApellido').value = '';
  document.getElementById('cEmail').value = '';
  document.getElementById('cMensaje').value = '';
}

/* ============================================
   MISC
============================================ */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast ' + type;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// Init
renderAlertas();


/* ============================================
   PERFIL
============================================ */
function showPerfilSection(section) {
  document.querySelectorAll('.perfil-nav-item').forEach(i => i.classList.remove('active'));
  const active = document.querySelector(`.perfil-nav-item[onclick*="${section}"]`);
  if (active) active.classList.add('active');

  const content = document.getElementById('perfilContent');

  if (section === 'mis-datos') {
    content.innerHTML = `
      <h2 class="perfil-section-title">Mis datos</h2>
      <p class="perfil-section-sub">Información personal</p>
      <div class="form-row">
        <div class="form-group"><label>Nombres</label><input type="text" value="${usuarioActual.nombre}"/></div>
        <div class="form-group"><label>Apellidos</label><input type="text" value="${usuarioActual.apellido}"/></div>
      </div>
      <div class="form-group"><label>Correo electrónico</label><input type="email" value="${usuarioActual.email}"/></div>
      <div class="form-group"><label>Teléfono</label><input type="tel" value="${usuarioActual.telefono}"/></div>
      <div class="form-group"><label>Fecha de nacimiento</label><input type="date" value="${usuarioActual.fechaNacimiento}"/></div>
      <div class="form-group"><label>Género</label>
        <select style="width:100%;padding:12px 14px;border:1.5px solid var(--gray-mid);border-radius:var(--radius);font-family:var(--font-body);font-size:0.9rem;outline:none">
          <option ${usuarioActual.genero==='Masculino'?'selected':''}>Masculino</option>
          <option ${usuarioActual.genero==='Femenino'?'selected':''}>Femenino</option>
          <option ${usuarioActual.genero==='Prefiero no decir'?'selected':''}>Prefiero no decir</option>
        </select>
      </div>
      <button class="btn-primary full" onclick="showToast('Cambios guardados exitosamente','success')">Guardar cambios</button>`;
  }

  else if (section === 'favoritos') {
    content.innerHTML = `
      <h2 class="perfil-section-title">Mis favoritos</h2>
      <p class="perfil-section-sub">Medicamentos que marcaste como favoritos</p>
      <div class="favoritos-empty">
        <div class="favoritos-empty-icon">❤️</div>
        <p style="font-weight:700;margin-bottom:8px">Sin favoritos aún</p>
        <p style="font-size:0.85rem">Guarda medicamentos que verificas seguido para acceder rápidamente.</p>
      </div>`;
  }

  else if (section === 'escaneos') {
    content.innerHTML = `
      <h2 class="perfil-section-title">Historial de escaneos</h2>
      <p class="perfil-section-sub">Todas tus verificaciones</p>
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:20px">
        <button class="filter-btn active" style="padding:6px 16px;border-radius:20px;border:1.5px solid #ccc;background:var(--green);color:white;font-size:0.8rem;cursor:pointer">Todos</button>
        <button class="filter-btn" style="padding:6px 16px;border-radius:20px;border:1.5px solid #ccc;background:none;font-size:0.8rem;cursor:pointer">Auténticos</button>
        <button class="filter-btn" style="padding:6px 16px;border-radius:20px;border:1.5px solid #ccc;background:none;font-size:0.8rem;cursor:pointer">Advertencias</button>
        <button class="filter-btn" style="padding:6px 16px;border-radius:20px;border:1.5px solid #ccc;background:none;font-size:0.8rem;cursor:pointer">Riesgo</button>
      </div>
      <div class="perfil-escaneos-group">
        <div class="perfil-escaneos-group-label">Hoy</div>
        ${historialData.filter(h => h.fecha.includes('Hoy')).map(h => {
          const m = medicamentos.find(x => x.id === h.med_id);
          if (!m) return '';
          const ec = m.estado==='autentico'?'badge-autentico':m.estado==='riesgo'?'badge-riesgo':'badge-advertencia';
          const el = m.estado==='autentico'?'Auténtico':m.estado==='riesgo'?'Riesgo alto':'Advertencia';
          return `<div class="historial-item" onclick='mostrarResultado(${JSON.stringify(m)})'>
            <div class="hist-img">💊</div>
            <div class="hist-info"><div class="hist-nombre">${m.nombre}</div><div class="hist-sub">${m.lab} &bull; ${h.fecha}</div></div>
            <div class="hist-estado ${ec}">${el}</div>
            <div class="hist-arrow">›</div>
          </div>`;
        }).join('')}
      </div>
      <div class="perfil-escaneos-group">
        <div class="perfil-escaneos-group-label">Ayer</div>
        ${historialData.filter(h => h.fecha.includes('Ayer')).map(h => {
          const m = medicamentos.find(x => x.id === h.med_id);
          if (!m) return '';
          const ec = m.estado==='autentico'?'badge-autentico':m.estado==='riesgo'?'badge-riesgo':'badge-advertencia';
          const el = m.estado==='autentico'?'Auténtico':m.estado==='riesgo'?'Riesgo alto':'Advertencia';
          return `<div class="historial-item" onclick='mostrarResultado(${JSON.stringify(m)})'>
            <div class="hist-img">💊</div>
            <div class="hist-info"><div class="hist-nombre">${m.nombre}</div><div class="hist-sub">${m.lab} &bull; ${h.fecha}</div></div>
            <div class="hist-estado ${ec}">${el}</div>
            <div class="hist-arrow">›</div>
          </div>`;
        }).join('')}
      </div>`;
  }

  else if (section === 'recordatorios') {
    content.innerHTML = `
      <h2 class="perfil-section-title">Recordatorios</h2>
      <p class="perfil-section-sub">Gestiona tus alarmas de medicamentos</p>
      <div class="recordatorio-item">
        <div class="recordatorio-info"><div class="recordatorio-nombre">Metformina 850mg</div><div class="recordatorio-hora">Cada día a las 8:00 am</div></div>
        <label class="toggle-switch"><input type="checkbox" checked/><span class="toggle-slider"></span></label>
      </div>
      <div class="recordatorio-item">
        <div class="recordatorio-info"><div class="recordatorio-nombre">Vitamina C 500mg</div><div class="recordatorio-hora">Cada día a las 1:00 pm</div></div>
        <label class="toggle-switch"><input type="checkbox" checked/><span class="toggle-slider"></span></label>
      </div>
      <div class="recordatorio-item">
        <div class="recordatorio-info"><div class="recordatorio-nombre">Ibuprofeno 400mg</div><div class="recordatorio-hora">Cada 8 horas</div></div>
        <label class="toggle-switch"><input type="checkbox"/><span class="toggle-slider"></span></label>
      </div>
      <div class="frecuente-add" style="margin-top:16px" onclick="showToast('Función disponible próximamente','')">
        <div class="frecuente-add-icon">＋</div>
        <div><h3>Nuevo recordatorio</h3><p>Configura una alarma para tu medicamento</p></div>
      </div>`;
  }

  else if (section === 'configuracion') {
    content.innerHTML = `
      <h2 class="perfil-section-title">Configuración</h2>
      <p class="perfil-section-sub">Personaliza tu experiencia</p>
      <div class="config-item">
        <div><div class="config-item-label">Notificaciones</div><div class="config-item-sub">Alertas sanitarias y recordatorios</div></div>
        <label class="toggle-switch"><input type="checkbox" checked/><span class="toggle-slider"></span></label>
      </div>
      <div class="config-item">
        <div><div class="config-item-label">Privacidad y seguridad</div><div class="config-item-sub">Contraseña y acceso</div></div>
        <span class="config-value">› </span>
      </div>
      <div class="config-item">
        <div><div class="config-item-label">Idioma</div><div class="config-item-sub">Idioma de la aplicación</div></div>
        <span class="config-value">Español ›</span>
      </div>
      <div class="config-item">
        <div><div class="config-item-label">Tema</div><div class="config-item-sub">Apariencia visual</div></div>
        <span class="config-value">Claro ›</span>
      </div>
      <div class="config-item">
        <div><div class="config-item-label">Unidades</div><div class="config-item-sub">Sistema de medición</div></div>
        <span class="config-value">Métrico ›</span>
      </div>
      <div class="config-item">
        <div><div class="config-item-label">Sincronizar datos</div><div class="config-item-sub">Guardar historial en la nube</div></div>
        <label class="toggle-switch"><input type="checkbox" checked/><span class="toggle-slider"></span></label>
      </div>
      <div class="config-item">
        <div><div class="config-item-label">Acerca de MedSeguro</div><div class="config-item-sub">Versión 1.0.0</div></div>
        <span class="config-value">›</span>
      </div>`;
  }

  else if (section === 'ayuda') {
    content.innerHTML = `
      <h2 class="perfil-section-title">Ayuda y soporte</h2>
      <p class="perfil-section-sub">Opciones de soporte</p>
      <div class="ayuda-opcion" onclick="showToast('Abriendo preguntas frecuentes','')">
        <div class="ayuda-icon">❓</div>
        <div><div class="ayuda-label">Preguntas frecuentes (FAQ)</div></div>
        <span style="margin-left:auto;color:var(--gray-text)">›</span>
      </div>
      <div class="ayuda-opcion" onclick="goTo('nosotros')">
        <div class="ayuda-icon">✉️</div>
        <div><div class="ayuda-label">Contáctanos</div></div>
        <span style="margin-left:auto;color:var(--gray-text)">›</span>
      </div>
      <div class="ayuda-opcion" onclick="showToast('Reporte enviado a DIGEMID','success')">
        <div class="ayuda-icon">⚠️</div>
        <div><div class="ayuda-label">Reportar un problema</div></div>
        <span style="margin-left:auto;color:var(--gray-text)">›</span>
      </div>
      <div class="ayuda-opcion" onclick="goTo('nosotros')">
        <div class="ayuda-icon">🛡️</div>
        <div><div class="ayuda-label">Sobre MedSeguro</div></div>
        <span style="margin-left:auto;color:var(--gray-text)">›</span>
      </div>
      <div class="ayuda-card">
        <h3>¿Necesitas ayuda?</h3>
        <p>Nuestro equipo está listo para ayudarte con cualquier consulta sobre medicamentos, farmacias o problemas técnicos.</p>
        <button class="btn-primary" style="background:white;color:var(--green)" onclick="goTo('nosotros')">Contactar soporte</button>
      </div>`;
  }
}

function cerrarSesionPerfil() {
  setLoggedOut();
  showToast('Sesión cerrada', '');
  setTimeout(() => goTo('inicio'), 800);
}

// Inicializar la sección por defecto al entrar al perfil
const _goTo = goTo;
// Patch goTo para inicializar perfil
const origGoTo = goTo;

function setLoggedIn(nombre, email) {
  isLoggedIn = true;
  document.getElementById('navActions').style.display = 'none';
  document.getElementById('navPerfilBtn').style.display = 'flex';
  document.getElementById('mobileAuthBtns').style.display = 'none';
  document.getElementById('mobilePerfilBtn').style.display = 'block';

  const iniciales = nombre.split(' ').map(n => n[0]).join('').substring(0,2).toUpperCase();
  document.querySelector('#navPerfilBtn .nav-avatar').textContent = iniciales;
  document.querySelector('#navPerfilBtn span').textContent = nombre;

  // Actualizar sidebar del perfil
  const perfilNombre = document.querySelector('.perfil-nombre');
  const perfilEmail = document.querySelector('.perfil-email');
  const perfilAvatar = document.querySelector('.perfil-avatar-block .perfil-avatar');
  if (perfilNombre) perfilNombre.textContent = nombre;
  if (perfilEmail) perfilEmail.textContent = email || '';
  if (perfilAvatar) perfilAvatar.textContent = iniciales;
}

function setLoggedOut() {
  isLoggedIn = false;
  document.getElementById('navActions').style.display = 'flex';
  document.getElementById('navPerfilBtn').style.display = 'none';
  document.getElementById('mobileAuthBtns').style.display = 'block';
  document.getElementById('mobilePerfilBtn').style.display = 'none';
}