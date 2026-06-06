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
    let alertasFiltroActual = 'todas';
    let historialFiltroActual = 'todos';

    /* ============================================
       NAVEGACIÓN
    ============================================ */
    function goTo(page, section = null) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      const target = document.getElementById('page-' + page);
      if (target) target.classList.add('active');

      // Actualizar nav activo
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

      // Render según página
      if (page === 'alertas') renderAlertas();
      if (page === 'historial') { renderHistorial(); renderFrecuentes(); }
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
      if (e.target.classList.contains('modal-overlay')) { e.target.classList.remove('open'); document.body.style.overflow = ''; }
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
    }
    function enviarReset() {
      const email = document.getElementById('forgotEmail').value;
      if (!email.includes('@')) { showToast('Ingresa un correo válido', 'error'); return; }
      closeModal('forgotModal');
      showToast('Instrucciones enviadas a tu correo', 'success');
    }

    /* ============================================
       BÚSQUEDA
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
       RESULTADO
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
            <button class="btn-primary full" onclick="closeModal('resultModal');showToast('Guardado en frecuentes','success')">💊 Guardar en medicamentos frecuentes</button>
            <button class="btn-outline full" onclick="closeModal('resultModal');showToast('Compartido exitosamente','success')">📤 Compartir resultado</button>
          </div>
          <p style="font-size:0.75rem;color:#999;text-align:center;margin-top:16px">⚠️ Este resultado no reemplaza el consejo de un médico real</p>
        </div>`;
      } else if (med.estado === 'advertencia') {
        html = `<div class="result-riesgo">
          <div class="result-icon">⚠️</div>
          <h2 style="color:${window.CSS&&CSS.supports('color','var(--orange)')?"var(--orange)":'#e65100'};font-family:var(--font-display);font-size:2rem;margin-bottom:8px">Advertencia</h2>
          <p style="color:var(--gray-text);margin-bottom:20px">Este medicamento requiere precaución al usar</p>
          <div class="result-card" style="border-color:#ff9800"><h3>${med.nombre}</h3><div class="result-sub">${med.lab}</div></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:20px;text-align:left">
            <div><h4 style="font-size:0.9rem;font-weight:700;margin-bottom:8px">Precauciones</h4><ul style="font-size:0.85rem;color:#555;padding-left:16px;line-height:1.8"><li>Verificar fecha de vencimiento</li><li>Consultar al farmacéutico</li><li>No automedicarse</li></ul></div>
            <div><h4 style="font-size:0.9rem;font-weight:700;margin-bottom:8px">Recomendaciones</h4><ul style="font-size:0.85rem;color:#555;padding-left:16px;line-height:1.8"><li>Consulte a su médico</li><li>Compre en farmacias autorizadas</li><li>Guarde el comprobante</li></ul></div>
          </div>
          <div class="result-acciones">
            <button class="btn-outline full" onclick="closeModal('resultModal');openModal('scanModal')">🔁 Volver a escanear</button>
            <button class="btn-primary full" onclick="closeModal('resultModal');showToast('Reporte enviado a DIGEMID','success')">📋 Reportar problema</button>
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
      const filtrados = historialFiltroActual === 'todos' ? historialData : historialData.filter(h => { const m = medicamentos.find(x => x.id === h.med_id); return m && m.estado === historialFiltroActual; });
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