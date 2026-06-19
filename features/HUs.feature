Feature: HU001: Búsqueda de medicamentos por nombre

    Como paciente, familiar o profesional de salud, 
    quiero buscar medicamentos por su nombre, 
    para verificar si el medicamento se encuentra registrado oficialmente.

Scenario Outline: Búsqueda exitosa de medicamento
    Dado que el usuario se encuentra en la sección de búsqueda de medicamentos
    Cuando ingrese el <nombre> de un medicamento válido
    Entonces el sistema mostrará una <lista_resultados> de medicamentos relacionados.

    Examples: Datos de entrada
        | usuario   | nombre      |
        | Juan      | Metformina  |
        | Ana       | Amoxicilina |

    Examples: Datos de salida
        | lista_resultados                            |
        | Metformina 500mg, Metformina 850mg           |
        | Amoxicilina 250mg, Amoxicilina 500mg          |


Scenario Outline: Medicamento no encontrado
    Dado que el usuario se encuentra en la sección de búsqueda de medicamentos
    Cuando ingrese un <nombre_inexistente> de medicamento
    Entonces el sistema mostrará un <mensaje> indicando que no se encontraron resultados.

    Examples: Datos de entrada
        | usuario   | nombre_inexistente |
        | Juan      | MedicamentoXYZ     |
        | Maria     | ProductoABC        |

    Examples: Datos de salida
        | mensaje                      |
        | No se encontraron resultados |
Feature: HU002: Escaneo de medicamentos

    Como paciente, familiar o profesional de salud, 
    quiero escanear el código de un medicamento, 
    para acceder rápidamente a la información del producto sin ingresar datos manualmente.

Scenario Outline: Escaneo exitoso
    Dado que el usuario acceda a la cámara de la aplicación
    Cuando escanee correctamente el <código_barra> del medicamento
    Entonces el sistema identificará el <producto> y mostrará su información registrada.

    Examples: Datos de entrada
        | usuario   | código_barra  |
        | Juan      | 7750123456789 |
        | Ana       | 7750987654321 |

    Examples: Datos de salida
        | producto                         |
        | Paracetamol 500mg - Lab. Genfar |
        | Ibuprofeno 400mg - Lab. Sandoz  |


Scenario Outline: Código no reconocido
    Dado que el usuario acceda a la cámara de la aplicación
    Cuando el sistema no reconozca el <código_erróneo> escaneado
    Entonces se mostrará un <mensaje_error> indicando que el producto no pudo ser identificado.

    Examples: Datos de entrada
        | usuario   | código_erróneo |
        | Juan      | 0000000000000  |
        | Maria     | 1111111111111  |

    Examples: Datos de salida
        | mensaje_error                        |
        | El producto no pudo ser identificado |
Feature: HU003: Consulta de registro sanitario oficial

    Como paciente, familiar o profesional de salud, 
    quiero consultar el registro sanitario oficial de un medicamento, 
    para confirmar que el producto se encuentra autorizado por las entidades correspondientes.

Scenario Outline: Visualización de registro sanitario
    Dado que el usuario consulte un medicamento registrado
    Cuando acceda a la información oficial del <producto>
    Entonces el sistema mostrará el <número_registro> y estado del registro sanitario.

    Examples: Datos de entrada
        | usuario   | producto    |
        | Juan      | Paracetamol |
        | Ana       | Metformina  |

    Examples: Datos de salida
        | número_registro        |
        | Reg. DIGEMID: EN-12345 |
        | Reg. DIGEMID: EE-67890 |
Feature: HU004: Verificación de autenticidad de medicamentos

    Como paciente, familiar o profesional de salud, 
    quiero verificar la autenticidad de un medicamento, 
    para evitar el consumo de productos falsificados.

Scenario Outline: Medicamento validado correctamente
    Dado que el usuario consulte un medicamento con <información_lote> válida
    Cuando el sistema complete el proceso de validación
    Entonces se mostrará un <estado_visual> indicando que el medicamento es confiable.

    Examples: Datos de entrada
        | usuario   | información_lote |
        | Juan      | Lote: LT-2026    |
        | Ana       | Lote: ABC-456    |

    Examples: Datos de salida
        | estado_visual                        |
        | Check Verde - Medicamento Autorizado |


Scenario Outline: Detección de posible riesgo
    Dado que el usuario consulte un medicamento con <información_inconsistente>
    Cuando el sistema detecte irregularidades o alertas sanitarias
    Entonces se mostrará una <advertencia_riesgo> indicando que el medicamento podría representar un riesgo para el usuario.

    Examples: Datos de entrada
        | usuario   | información_inconsistente  |
        | Juan      | Lote Modificado: XX-00     |
        | Maria     | Registro Sanitario Expirado|

    Examples: Datos de salida
        | advertencia_riesgo                                                 |
        | Alerta Roja - El medicamento representa un riesgo para el usuario   |
Feature: HU005: Visualización de información general de medicamentos

    Como paciente o familiar, 
    quiero visualizar información general de un medicamento, 
    para conocer sus características principales.

Scenario Outline: Visualización de registro válido
    Dado que el usuario acceda al detalle de un <medicamento>
    Cuando visualice la información disponible
    Entonces el sistema mostrará <nombre_comercial>, <laboratorio> y descripción del producto.

    Examples: Datos de entrada
        | usuario   | medicamento |
        | Juan      | Panadol     |
        | Maria     | Apronax     |

    Examples: Datos de salida
        | nombre_comercial | laboratorio |
        | Panadol 500mg    | GSK         |
        | Apronax 550mg    | Bayer       |


Scenario Outline: Información incompleta
    Dado que el usuario acceda al detalle de un <medicamento_parcial>
    Cuando cierta información no se encuentre disponible
    Entonces el sistema mostrará únicamente los <datos_oficiales> registrados oficialmente.

    Examples: Datos de entrada
        | usuario   | medicamento_parcial |
        | Juan      | Genérico Genfar     |
        | Maria     | Jarabe ABC          |

    Examples: Datos de salida
        | datos_oficiales                             |
        | Despliega solo Nombre y Registro Sanitario  |
        | Despliega solo Laboratorio y Lote Base      |

Scenario Outline: Ausencia de registro sanitario
    Dado que el usuario consulte un medicamento
    Cuando el <producto_sospechoso> no cuente con un registro sanitario válido
    Entonces el sistema mostrará un <mensaje_alerta> indicando que no existe autorización oficial registrada.

    Examples: Datos de entrada
        | usuario   | producto_sospechoso |
        | Juan      | Falsomedic 500mg    |
        | Maria     | Curatodo Jarabe     |

    Examples: Datos de salida
        | mensaje_alerta                            |
        | No existe autorización oficial registrada |
Feature: HU006: Consulta de composición de medicamentos

    Como profesional de salud,
    quiero consultar la composición de un medicamento,
    para conocer sus componentes activos.

Scenario Outline: Visualización de composición
    Dado que el profesional acceda al detalle de un <medicamento>
    Cuando consulte la sección de composición
    Entonces el sistema mostrará los <principios_activos> del medicamento.

    Examples: Datos de entrada
        | profesional | medicamento |
        | Dr. Torres  | Metformina  |
        | Dra. Quispe | Amoxicilina |

    Examples: Datos de salida
        | principios_activos     |
        | Metformina Clorhidrato |
        | Amoxicilina Trihidrato |


Scenario Outline: Composición no disponible
    Dado que el profesional acceda al detalle de un <medicamento_nuevo>
    Cuando la composición no se encuentre registrada
    Entonces el sistema mostrará un <mensaje> indicando que la información no está disponible.

    Examples: Datos de entrada
        | profesional | medicamento_nuevo |
        | Dr. Torres  | MedicamentoXYZ    |
        | Dra. Quispe | ProductoABC       |

    Examples: Datos de salida
        | mensaje                                                  |
        | La información de composición no se encuentra disponible |
Feature: HU007: Consulta de indicaciones de medicamentos

    Como paciente o familiar,
    quiero consultar las indicaciones de un medicamento,
    para conocer para qué sirve y cómo debe utilizarse.

Scenario Outline: Visualización de indicaciones
    Dado que el usuario acceda al detalle de un <medicamento>
    Cuando consulte las indicaciones del producto
    Entonces el sistema mostrará las <recomendaciones> principales de uso.

    Examples: Datos de entrada
        | usuario | medicamento |
        | Juan    | Metformina  |
        | Maria   | Amoxicilina |

    Examples: Datos de salida
        | recomendaciones                                                          |
        | Indicado para el tratamiento de la diabetes mellitus tipo 2              |
        | Indicado para infecciones bacterianas del tracto respiratorio superior   |


Scenario Outline: Indicaciones no disponibles
    Dado que el usuario acceda al detalle de un <medicamento_sin_datos>
    Cuando las indicaciones no se encuentren registradas
    Entonces el sistema mostrará un <mensaje> indicando que no existe información disponible.

    Examples: Datos de entrada
        | usuario | medicamento_sin_datos |
        | Juan    | MedicamentoXYZ        |
        | Maria   | ProductoABC           |

    Examples: Datos de salida
        | mensaje                                                     |
        | No existe información de indicaciones disponible de momento |
Feature: HU008: Verificación de fecha de vencimiento

    Como paciente o familiar,
    quiero verificar la fecha de vencimiento de un medicamento,
    para evitar el consumo de productos vencidos.

Scenario Outline: Medicamento vigente
    Dado que el usuario consulte un <medicamento>
    Cuando la fecha de vencimiento aún sea válida
    Entonces el sistema mostrará la <fecha_vencimiento> del producto.

    Examples: Datos de entrada
        | usuario | medicamento |
        | Juan    | Metformina  |
        | Maria   | Amoxicilina |

    Examples: Datos de salida
        | fecha_vencimiento |
        | Diciembre 2026    |
        | Octubre 2027      |


Scenario Outline: Medicamento vencido
    Dado que el usuario consulte un <medicamento_expirado>
    When el producto se encuentre vencido
    Entonces el sistema mostrará una <alerta_visual> indicando que el medicamento no debe consumirse.

    Examples: Datos de entrada
        | usuario | medicamento_expirado |
        | Juan    | Paracetamol Lote X   |
        | Maria   | Ibuprofeno Viejo     |

    Examples: Datos de salida
        | alerta_visual                                                             |
        | Alerta Roja: El lote de este medicamento expiró. Riesgo Sanitario         |
        | Alerta Roja: Producto vencido. No apto para el consumo humano             |
Feature: HU009: Consulta de advertencias de medicamentos

    Como paciente o familiar,
    quiero visualizar advertencias relacionadas a un medicamento,
    para conocer posibles riesgos o restricciones de uso.

Scenario Outline: Visualización de advertencias
    Dado que el usuario acceda al detalle de un <medicamento>
    Cuando consulte las advertencias del producto
    Entonces el sistema mostrará las <restricciones> y riesgos asociados.

    Examples: Datos de entrada
        | usuario | medicamento |
        | Juan    | Ibuprofeno  |
        | Maria   | Paracetamol |

    Examples: Datos de salida
        | restricciones                                                 |
        | No administrar en pacientes con úlcera gástrica activa            |
        | Cuidado: El uso prolongado puede causar daño hepático severo      |


Scenario Outline: Medicamento sin advertencias registradas
    Dado que el usuario acceda al detalle de un <medicamento_suave>
    Cuando no existan advertencias oficiales registradas
    Entonces el sistema mostrará un <mensaje_informativo> indicando que no se encontraron advertencias.

    Examples: Datos de entrada
        | usuario | medicamento_suave |
        | Juan    | Vitamina C        |
        | Maria   | Manzanilla Filtro |

    Examples: Datos de salida
        | mensaje_informativo                                                      |
        | No se encontraron advertencias especiales registradas para este producto |
Feature: HU010: Historial de verificaciones de medicamentos

    Como paciente, familiar o profesional de salud,
    quiero guardar el historial de verificaciones realizadas,
    para consultar medicamentos revisados anteriormente.

Scenario Outline: Almacenamiento de historial
    Dado que el usuario verifique un <medicamento>
    Cuando finalice la consulta correctamente
    Entonces el sistema guardará el medicamento en el <historial_registro>.

    Examples: Datos de entrada
        | usuario    | medicamento |
        | Juan       | Metformina  |
        | Dr. Torres | Amoxicilina |

    Examples: Datos de salida
        | historial_registro                  |-
        | Metformina añadido al historial     |
        | Amoxicilina añadido al historial    |


Scenario Outline: Consulta de historial
    Dado que el usuario acceda a la sección de historial
    Cuando existan verificaciones registradas
    Entonces el sistema mostrará la <lista_cronológica> de medicamentos consultados anteriormente.

    Examples: Datos de entrada
        | usuario    | registros_previos       |
        | Juan       | Metformina, Paracetamol |
        | Dr. Torres | Amoxicilina, Tramadol   |

    Examples: Datos de salida
        | lista_cronológica                                          |
        | Despliegue cronológico de verificaciones anteriores exitoso|

Feature: HU011: Visualizar alertas sanitarias recientes 

    Como paciente, familiar o profesional de salud, 
    quiero visualizar alertas sanitarias recientes 
    para mantenerme informado sobre medicamentos riesgosos. 

Scenario Outline: Visualización correcta de alertas 
    Dado que el <usuario_rol> acceda a la sección de alertas sanitarias
    Cuando consulte las alertas recientes
    Entonces el sistema mostrará una lista actualizada de alertas con información relevante. 

    Examples: Datos de entrada
        | usuario_rol  |
        | Paciente     |
        | Familiar     |
        | Profesional  |


Scenario Outline: Ausencia de alertas sanitarias 
    Dado que el <usuario_rol> acceda a la sección de alertas sanitarias
    Cuando no existan alertas disponibles
    Entonces el sistema mostrará un <mensaje> indicando que no existen alertas sanitarias recientes. 

    Examples: Datos de entrada
        | usuario_rol |
        | Paciente    |

    Examples: Datos de salida
        | mensaje                                          |
        | No existen alertas sanitarias recientes de momento |
Feature: HU012: Consultar detalle de una alerta sanitaria 

    Como profesional de salud, 
    quiero consultar el detalle de una alerta sanitaria 
    para conocer el riesgo asociado al medicamento. 

Scenario Outline: Consulta correcta del detalle de alerta 
    Dado que el <usuario_rol> acceda a una alerta sanitaria
    Cuando seleccione el detalle de la alerta
    Entonces el sistema mostrará <información_detallada> sobre el riesgo y recomendaciones relacionadas. 

    Examples: Datos de entrada
        | usuario_rol |
        | Profesional |
        | Familiar    |

    Examples: Datos de salida
        | información_detallada                                              |
        | Muestra composición del lote falso, riesgos y qué hacer en la app |


Scenario Outline: Detalle de alerta no disponible 
    Dado que el <usuario_rol> acceda a una alerta sanitaria
    Cuando no exista información detallada disponible
    Entonces el sistema mostrará un <mensaje> indicando que no existe información detallada para la alerta seleccionada. 

    Examples: Datos de entrada
        | usuario_rol |
        | Profesional |

    Examples: Datos de salida
        | mensaje                                                   |
        | No existe información detallada para la alerta seleccionada | 
Feature: HU013: Buscar alertas sanitarias 

    Como paciente, familiar o profesional de salud, 
    quiero buscar alertas sanitarias 
    para verificar riesgos relacionados con medicamentos específicos. 

Scenario Outline: Búsqueda exitosa de alertas 
    Dado que el <usuario_rol> acceda a la búsqueda de alertas
    Cuando ingrese el <nombre_medicina> de un medicamento
    Entonces el sistema mostrará <alertas_encontradas> relacionadas con la búsqueda realizada. 

    Examples: Datos de entrada
        | usuario_rol | nombre_medicina |
        | Paciente    | Ibuprofeno      |
        | Profesional | Paracetamol     |

    Examples: Datos de salida
        | alertas_encontradas                          |
        | Lista de alertas asociadas al lote de Ibuprofeno |


Scenario Outline: Ausencia de resultados en la búsqueda 
    Dado que el <usuario_rol> acceda a la búsqueda de alertas
    Cuando no existan alertas relacionadas con el medicamento ingresado
    Entonces el sistema mostrará un <mensaje> indicando que no se encontraron alertas relacionadas. 

    Examples: Datos de entrada
        | usuario_rol | medicamento |
        | Paciente    | VitaminaC   |

    Examples: Datos de salida
        | mensaje                                           |
        | No se encontraron alertas relacionadas para la búsqueda |
Feature: HU014: Filtrar alertas sanitarias 

    Como profesional de salud, 
    quiero filtrar alertas sanitarias 
    para encontrar información específica más rápido. 

Scenario Outline: Filtrado correcto de alertas 
    Dado que el profesional de salud acceda a la sección de alertas
    Cuando aplique <filtros_búsqueda> de búsqueda
    Entonces el sistema mostrará alertas relacionadas con los criterios seleccionados. 

    Examples: Datos de entrada
        | filtros_búsqueda |
        | Falsificación     |
        | Retiro de lote    |

    Examples: Datos de salida
        | resultados_filtrados                |
        | Muestra solo medicinas falsificadas |


Scenario Outline: Sin resultados en el filtrado 
    Dado que el <usuario_rol> acceda a la sección de alertas
    Cuando no existan alertas que coincidan con los filtros aplicados
    Entonces el sistema mostrará un <mensaje> indicando que no existen resultados para los filtros seleccionados. 

    Examples: Datos de entrada
        | usuario_rol | filtro_aplicado |
        | Profesional | JarabesViejos   |

    Examples: Datos de salida
        | mensaje                                                |
        | No existen resultados para los filtros seleccionados   |
Feature: HU015: Recibir notificaciones de nuevas alertas 

    Como paciente, familiar o profesional de salud registrado, 
    quiero recibir notificaciones sobre nuevas alertas sanitarias 
    para enterarme rápidamente de posibles riesgos. 

Scenario Outline: Recepción correcta de notificaciones 
    Dado que el <usuario_rol> tenga activadas las notificaciones
    Cuando se publique una nueva alerta sanitaria
    Entonces el sistema enviará una <notificación> relacionada con la alerta. 

    Examples: Datos de entrada
        | usuario_rol |
        | Paciente    |
        | Profesional |

    Examples: Datos de salida
        | notificación                                   |
        | Alerta en pantalla: Nuevo lote falso detectado |


Scenario Outline: Notificaciones desactivadas 
    Dado que el <usuario_rol> tenga desactivadas las notificaciones
    Cuando se publique una nueva alerta sanitaria
    Entonces el sistema no enviará notificaciones y mostrará el <estado> desactivado en la configuración. 

    Examples: Datos de entrada
        | usuario_rol |
        | Familiar    |

    Examples: Datos de salida
        | estado              |
        | Alerta Desactivada  |
Feature: HU016: Visualizar nivel de riesgo de la alerta 

    Como paciente, familiar o profesional de salud, 
    quiero visualizar el nivel de riesgo de una alerta sanitaria 
    para comprender la gravedad del problema. 

Scenario Outline: Visualización correcta del nivel de riesgo 
    Dado que el <usuario_rol> acceda al detalle de una alerta
    Cuando consulte la información de riesgo
    Entonces el sistema mostrará el <nivel_riesgo> asociado a la alerta sanitaria. 

    Examples: Datos de entrada
        | usuario_rol |
        | Paciente    |
        | Profesional |

    Examples: Datos de salida
        | nivel_riesgo                             |
        | Muestra: Alerta Roja - Riesgo Muy Alto   |
        | Muestra: Alerta Amarilla - Riesgo Medio  |


Scenario Outline: Ausencia de nivel de riesgo 
    Dado que el <usuario_rol> acceda al detalle de una alerta
    Cuando no exista información del nivel de riesgo
    Entonces el sistema mostrará un <mensaje> indicando que no existe información de riesgo disponible. 

    Examples: Datos de entrada
        | usuario_rol |
        | Paciente    |

    Examples: Datos de salida
        | mensaje                                     |
        | No existe información de riesgo disponible |
Feature: HU017: Guardar alertas importantes 

    Como paciente, familiar o profesional de salud registrado, 
    quiero guardar alertas sanitarias importantes 
    para consultarlas posteriormente. 

Scenario Outline: Guardado correcto de alerta 
    Dado que el <usuario_rol> acceda a una alerta sanitaria
    Cuando seleccione la opción de guardar alerta
    Entonces el sistema almacenará la alerta en la <sección_guardados>. 

    Examples: Datos de entrada
        | usuario_rol |
        | Paciente    |
        | Familiar    |

    Examples: Datos de salida
        | sección_guardados                    |
        | Alerta guardada en la lista personal |


Scenario Outline: Ausencia de alertas guardadas 
    Dado que el <usuario_rol> acceda a la sección de alertas guardadas
    Cuando no existan alertas almacenadas
    Entonces el sistema mostrará un <mensaje> indicando que no existen alertas guardadas. 

    Examples: Datos de entrada
        | usuario_rol |
        | Paciente    |

    Examples: Datos de salida
        | mensaje                              |
        | No existen alertas guardadas en la lista |
Feature: HU018: Búsqueda de farmacias autorizadas

    Como paciente o familiar, 
    quiero encontrar farmacias autorizadas 
    para poder adquirir los medicamentos de manera segura.

Scenario Outline: Búsqueda de farmacias autorizadas exitosa
    Dado que el usuario desea buscar farmacias autorizadas
    Cuando el usuario elija la opción "Búsqueda de farmacias autorizadas"
    Entonces el sistema mostrará un <mensaje_éxito> donde detalla la cantidad de farmacias autorizadas que encontró.

    Examples: Datos de entrada
        | usuario  |
        | Juan     |
        | Ana      |

    Examples: Datos de salida
        | mensaje_éxito                          |
        | Hemos encontrado 24 farmacias autorizadas |


Scenario Outline: Fallo en la búsqueda de farmacias autorizadas
    Dado que el usuario desea buscar farmacias autorizadas, pero no hay ninguna por la zona en la que vive
    Cuando el usuario elija la opción "Búsqueda de farmacias autorizadas"
    Entonces el sistema mostrará el <mensaje_error>.

    Examples: Datos de entrada
        | usuario |
        | Maria   |

    Examples: Datos de salida
        | mensaje_error                            |
        | No pudimos encontrar farmacias autorizadas |
Feature: HU019: Filtro de farmacias autorizadas

    Como paciente o familiar, 
    quiero filtrar farmacias autorizadas 
    para encontrar opciones que se ajusten a mis necesidades.  

Scenario Outline: Filtro de farmacias autorizadas exitoso
    Dado que el usuario desea filtrar farmacias autorizadas
    Cuando el usuario elija la opción "Filtrar farmacia"
    And complete los campos por los cuales desea filtrar la farmacia y le dé clic al botón "Filtrar"
    Entonces el sistema mostrará las <farmacias_filtradas> ordenadas de acuerdo a las necesidades del usuario.

    Examples: Datos de entrada
        | usuario |
        | Juan    |

    Examples: Datos de salida
        | farmacias_filtradas                       |
        | Inkafarma Lince (más cercana y abierta) |


Scenario Outline: Error en el filtro de farmacias autorizadas
    Dado que el usuario desea filtrar farmacias autorizadas
    Cuando el usuario elija la opción "Filtrar farmacia"
    And complete los campos por los cuales desea filtrar la farmacia y le dé clic al botón "Filtrar"
    Then el sistema mostrará el <mensaje_vacío> y detallará qué es lo que no se pudo encontrar.

    Examples: Datos de entrada
        | usuario |
        | Maria   |

    Examples: Datos de salida
        | mensaje_vacío                     |
        | No pudimos encontrar lo que buscabas |
Feature: HU020: Ubicación de farmacias autorizadas cercanas

    Como paciente/familiar, 
    quiero visualizar, en un mapa, el lugar donde se encuentran las diversas farmacias autorizadas 
    para determinar las más cercanas desde donde me encuentro.

Scenario Outline: Ubicación exitosa de farmacias autorizadas cercanas
    Dado que el usuario desea saber el lugar de las farmacias autorizadas cerca de su ubicación
    When el usuario elija la opción "Ver en el mapa" y acepte la solicitud para activar su ubicación en el celular
    Then el sistema abrirá un mapa donde señalará con un punto azul la ubicación del usuario y mostrará con <puntos_rojos> las farmacias cercanas.

    Examples: Datos de entrada
        | usuario |
        | Juan    |

    Examples: Datos de salida
        | puntos_rojos                         |
        | 3 farmacias autorizadas en San Isidro |


Scenario Outline: Ausencia de farmacias autorizadas cercanas
    Dado que el usuario desea saber el lugar de las farmacias autorizadas cerca de su ubicación
    When el usuario elija la opción "Ver en el mapa" y acepte la solicitud para activar su ubicación en el celular
    Then el sistema le mostrará el <mensaje_alerta> y le preguntará si desea buscar farmacias un poco más lejanas.

    Examples: Datos de entrada
        | usuario |
        | Maria   |

    Examples: Datos de salida
        | mensaje_alerta                                                    |
        | No pudimos encontrar farmacias autorizadas cercanas a tu ubicación |


Scenario Outline: Ubicación de farmacias autorizadas un poco lejanas
    Dado que el usuario desea saber el lugar de las farmacias autorizadas un poco lejos de su ubicación actual
    When el sistema le muestre la pregunta de búsqueda lejana y el usuario acepte la solicitud
    Then el sistema abrirá el mapa y mostrará con <puntos_lejanos> las farmacias autorizadas en distancias mayores.

    Examples: Datos de entrada
        | usuario |
        | Maria   |

    Examples: Datos de salida
        | puntos_lejanos                      |
        | Muestra locales en distritos vecinos |
Feature: HU021: Ruta de farmacias autorizadas

    Como paciente/familiar, 
    quiero conocer el camino a la farmacia autorizada de mi preferencia 
    para saber cómo llegar y no perderme.

Scenario Outline: Ruta de farmacia autorizada exitosa
    Dado que el usuario desea saber cómo llegar a la farmacia autorizada cercana de su preferencia
    When el sistema muestre las farmacias autorizadas en el mapa
    And el usuario elija la farmacia a la cual desea ir dándole clic al marcador en pantalla
    Then el sistema mostrará un <croquis_ruta> con el camino exacto seleccionado.

    Examples: Datos de entrada
        | usuario | farmacia_destino |
        | Juan    | Botica MiFarma   |
        | Ana     | Inkafarma Surco  |

    Examples: Datos de salida
        | croquis_ruta                       |
        | Línea de ruta verde hacia MiFarma  |
        | Línea de ruta verde hacia Inkafarma |
Feature: HU022: Disponibilidad de medicamentos en farmacias autorizadas

    Como paciente/familiar, 
    quiero saber si el medicamento que estoy buscando se encuentra disponible en alguna de las farmacias autorizadas, 
    para evitar ir a consultar de farmacia en farmacia y perder mucho tiempo.

Scenario Outline: Disponibilidad del medicamento deseado en farmacia
    Dado que el usuario desea saber qué farmacias autorizadas tienen disponible el medicamento que desea adquirir
    When complete el campo "Indicar medicamento que desea adquirir" y elija la opción "Filtrar"
    Then el sistema mostrará las <farmacias_con_stock> que tengan en su inventario la medicina buscada.

    Examples: Datos de entrada
        | usuario | medicina_buscada |
        | Juan    | Metformina       |

    Examples: Datos de salida
        | farmacias_con_stock                 |
        | Lista: Inkafarma Lince, Mifarma Av. A |


Scenario Outline: Falta de disponibilidad del medicamento deseado en farmacia
    Dado que el usuario desea saber qué farmacias autorizadas tienen disponible el medicamento que desea adquirir
    When complete el campo "Indicar medicamento que desea adquirir" y elija la opción "Filtrar"
    Then el sistema mostrará el <mensaje_sin_stock>.

    Examples: Datos de entrada
        | usuario | medicina_buscada |
        | Maria   | MedicamentoXYZ   |

    Examples: Datos de salida
        | mensaje_sin_stock                                                      |
        | Actualmente, no se encuentra disponible el medicamento en ninguna farmacia |
Feature: HU023: Información principal de farmacia autorizada

    Como paciente o familiar, 
    quiero saber información básica de la farmacia a la cual acudiré (como horarios de atención) 
    para conocer detalles antes de ir.

Scenario Outline: Información de contacto
    Dado que el usuario desea saber quién atiende en la farmacia que escogió
    When luego de escoger la farmacia de su preferencia elija la opción "Más información" y presione "Contacto"
    Then el sistema mostrará los <datos_contacto> del encargado del establecimiento.

    Examples: Datos de entrada
        | usuario | farmacia_elegida |
        | Juan    | Botica ABC       |

    Examples: Datos de salida
        | datos_contacto                   |
        | Nombre de farmacéutico y teléfono |


Scenario Outline: Conocimiento de horarios de atención
    Dado que el usuario desea saber el horario de atención de la farmacia
    When luego de escoger la farmacia de su preferencia elija la opción "Más información" y presione "Horarios de atención"
    Then el sistema mostrará los <horarios_atención> de la farmacia elegida.

    Examples: Datos de entrada
        | usuario | farmacia_elegida |
        | Ana     | Inkafarma Lince  |

    Examples: Datos de salida
        | horarios_atención        |
        | Lunes a Viernes 8am - 9pm |
Feature: HU024: Guardar farmacias favoritas

    Como usuario o paciente, 
    quiero poder marcar una o varias farmacias como favoritas 
    para que el sistema las priorice y muestre primero al momento de realizar búsquedas o aplicar filtros.

Scenario Outline: Añadir farmacias a favoritos
    Dado que el usuario desea guardar las farmacias de su preferencia o confianza
    When termine de filtrar las farmacias y presione la etiqueta "Guardar como favoritos"
    Then el sistema guardará el local y siempre <priorizará_favoritos> al mostrar nuevas búsquedas de farmacias autorizadas.

    Examples: Datos de entrada
        | usuario | farmacia_marcada |
        | Juan    | Botica Lince S.A. |

    Examples: Datos de salida
        | priorizar_favoritos                        |
        | Botica Lince aparece al tope de la lista |


Scenario Outline: Eliminar de favoritos a farmacias
    Dado que el usuario desea eliminar de favoritos una farmacia por ciertas razones
    When ingrese a la opción "Favoritos" dentro del filtrado de farmacias
    Then el usuario podrá retirar la farmacia de su lista haciendo clic en el botón <acción_eliminar>.

    Examples: Datos de entrada
        | usuario | farmacia_a_quitar |
        | Maria   | Botica Lince S.A. |

    Examples: Datos de salida
        | acción_eliminar                |
        | Botica retirada de favoritos |
Feature: HU025: Compartir información de farmacias

    Como paciente o familiar, 
    quiero compartir información de una farmacia autorizada 
    para recomendar establecimientos seguros.

Scenario Outline: Compartir información de farmacia a contactos
    Dado que el usuario desea compartir a sus contactos los datos de una farmacia en específico
    When elija la opción "Compartir" y seleccione el medio de comunicación por el cual desea enviar la información
    Then el sistema enviará los <datos_enviados> de la farmacia a las personas elegidas.

    Examples: Datos de entrada
        | usuario | medio_compartir | farmacia_compartida |
        | Juan    | WhatsApp        | Inkafarma Lince     |
        | Ana     | Telegram        | MiFarma Surco       |

    Examples: Datos de salida
        | datos_enviados                                             |
        | Envía texto con Dirección, Nombre y Enlace al mapa del local|
Feature: HU026: Búsqueda de medicamento por nombre comercial

    Como paciente o familiar, quiero buscar medicamentos por nombre comercial para saber más información acerca del medicamento que voy a comprar. 

Scenario Outline: Búsqueda de medicamento exitosa
    Dado que el <usuario_rol> desea saber rápidamente información básica sobre el medicamento
    Cuando ingresa el <nombre_comercial> a investigar en el buscador y selecciona la opción "Buscar"
    Entonces el sistema mostrará el medicamento y las <propiedades> del mismo.

    Examples: Datos de entrada
        | usuario_rol | nombre_comercial |
        | Paciente    | Panadol          |
        | Familiar    | Apronax          |

    Examples: Datos de salida
        | propiedades                      |
        | Enseña componentes y uso básico  |


Scenario Outline: Búsqueda de medicamento intermedia
    Dado que el <usuario_rol> desea saber más información sobre los medicamentos que comprará
    Cuando ingresa el <nombre_comercial> a investigar en el buscador y selecciona la opción "Buscar"
    Entonces el sistema mostrará <coincidencias_relacionadas> para ayudar al usuario a encontrar el medicamento.

    Examples: Datos de entrada
        | usuario_rol | nombre_comercial |
        | Paciente    | Panad            |

    Examples: Datos de salida
        | coincidencia_relacionadas         |
        | Muestra Panadol Forte, Panadol Antigripal |


Scenario Outline: Búsqueda de medicamento fallida
    Dado que el <usuario_rol> desea saber más información sobre los medicamentos que comprará
    Cuando ingresa el <nombre_comercial> a investigar en el buscador y selecciona la opción "Buscar"
    Entonces el sistema mostrará el <mensaje_error>.

    Examples: Datos de entrada
        | usuario_rol | nombre_comercial |
        | Familiar    | MedicinaFalsaXYZ |

    Examples: Datos de salida
        | mensaje_error                    |
        | No se encontró lo que buscaste   |
Feature: HU027: Visualización detallada de medicamento

    Como paciente o familiar, quiero visualizar información detallada del medicamento para conocer mejor sus características.

Scenario Outline: Descripción detallada de medicamento
    Dado que el <usuario_rol> desea investigar más a fondo el medicamento que va a comprar sin llegar a lo técnico
    Cuando seleccione la opción "Conocer más" al medicamento que buscó
    Entonces el sistema mostrará la <información_detallada> del medicamento.

    Examples: Datos de entrada
        | usuario_rol | medicina_buscada |
        | Paciente    | Panadol          |
        | Familiar    | Apronax          |

    Examples: Datos de salida
        | información_detallada                          |
        | Muestra descripción general, origen y uso básico |
Feature: HU028: Filtro de medicamentos

    Como paciente o familiar, quiero filtrar medicamentos para encontrar opciones que se ajusten a mis necesidades.  

Scenario Outline: Filtro de medicamentos exitoso
    Dado que el <usuario_rol> desea filtrar los medicamentos ya sea por precio o por efectividad
    Cuando elija la opción "Filtrar medicamento"
    And complete los campos de filtro y le dé clic al botón "Filtrar"
    Entonces el sistema mostrará los <medicamentos_filtrados> de mayor a menor acorde a sus necesidades.

    Examples: Datos de entrada
        | usuario_rol | tipo_filtro |
        | Paciente    | Precio      |

    Examples: Datos de salida
        | medicamentos_filtrados               |
        | Muestra opciones ordenadas por costo |


Scenario Outline: Error en el filtro de farmacias autorizadas
    Dado que el <usuario_rol> desea filtrar los medicamentos ya sea por precio o por efectividad
    Cuando elija la opción "Filtrar medicamento"
    And complete los campos de filtro y le dé clic al botón "Filtrar"
    Entonces el sistema mostrará el <mensaje_vacío> y qué es lo que no se pudo encontrar.

    Examples: Datos de entrada
        | usuario_rol | tipo_filtro  |
        | Familiar    | Efectividad  |

    Examples: Datos de salida
        | mensaje_vacío                     |
        | No pudimos encontrar lo que buscabas |
Feature: HU029: Costo de medicamentos

    Como paciente o familiar, quiero saber el costo del medicamento disponible en las farmacias autorizadas para comparar los precios y ahorrar dinero en caso se pudiera.

Scenario Outline: Éxito en la búsqueda del costo de medicamentos deseado
    Dado que el <usuario_rol> desea saber los diversos costos del medicamento que está buscando para poder ahorrar
    Cuando complete el campo "Ingrese el medicamento que busca"
    And indique un rango promedio de costo o elija "Filtrar por el más económico" y presione "Filtrar"
    Then el sistema mostrará los <resultados_costo> y la farmacia en orden de acuerdo a su selección.

    Examples: Datos de entrada
        | usuario_rol | medicamento | filtro_precio       |
        | Paciente    | Paracetamol | El más económico    |

    Examples: Datos de salida
        | resultados_costo                         |
        | Muestra Paracetamol a S/. 1.50 en BoticaA |


Scenario Outline: Error en la búsqueda del costo ideal
    Dado que el <usuario_rol> desea saber los diversos costos del medicamento que está buscando para poder ahorrar
    Cuando complete el campo "Ingrese el medicamento que busca"
    And indique un rango promedio de costo para el medicamento y presione "Filtrar"
    Then el sistema mostrará el <mensaje_alerta>.

    Examples: Datos de entrada
        | usuario_rol | medicamento | rango_precio |
        | Familiar    | Ibuprofeno  | S/. 0.10     |

    Examples: Datos de salida
        | mensaje_alerta                                                     |
        | No se encontró medicamentos dentro del rango de costo que indicó |
Feature: HU030: Efectividad de medicamentos

    Como paciente o familiar, quiero conocer los mejores medicamentos (sin importar el costo) para curarme lo más rápido posible.

Scenario Outline: Búsqueda de medicamentos por efectividad
    Dado que el <usuario_rol> desea saber los mejores medicamentos
    Cuando complete el campo "Ingrese el medicamento que busca" y elija la opción "Mostrar mejores medicamentos"
    Entonces el sistema mostrará los <medicamentos_top> y la farmacia en donde se ubica.

    Examples: Datos de entrada
        | usuario_rol | medicamento_buscado |
        | Paciente    | Amoxicilina         |
        | Familiar    | Antigripal          |

    Examples: Datos de salida
        | medicamentos_top                            |
        | Muestra los productos con mejor calificación |
Feature: HU031: Registrarse en la aplicación 

    Como paciente, familiar o profesional de salud, quiero crear una cuenta en la aplicación para acceder a funcionalidades personalizadas. 

Scenario Outline: Registro exitoso de paciente 
    Dado que el usuario seleccione la opción "Paciente" en la pantalla de registro
    Cuando complete correctamente sus <datos> personales y credenciales
    Entonces el sistema registrará la cuenta y permitirá acceder a funcionalidades relacionadas con medicamentos y alertas sanitarias. 

    Examples: Datos de entrada
        | datos                               |
        | Juan Perez, juan@email.com, pass123 |


Scenario Outline: Registro exitoso de familiar 
    Dado que el usuario seleccione la opción "Familiar" en la pantalla de registro
    Cuando complete correctamente sus <datos_contacto> personales y de contacto
    Entonces el sistema registrará la cuenta y permitirá gestionar perfiles y medicamentos de pacientes asociados. 

    Examples: Datos de entrada
        | datos_contacto                       |
        | Maria Gomez, maria@email.com, 987... |


Scenario Outline: Registro exitoso de profesional de salud 
    Dado que el usuario seleccione la opción "Profesional de salud" en la pantalla de registro
    When complete correctamente sus <datos_profesionales> personales, especialidad y código profesional
    Then el sistema registrará la cuenta y habilitará acceso a herramientas e información técnica especializada. 

    Examples: Datos de entrada
        | datos_profesionales                    |
        | Dr. Torres, Medicina, CMP 12345        |


Scenario Outline: Datos inválidos en el registro 
    Dado que el <usuario_rol> acceda al formulario de registro
    When ingrese información incompleta o incorrecta
    Then el sistema mostrará un <mensaje_error> indicando que los datos ingresados son inválidos.

    Examples: Datos de entrada
        | usuario_rol |
        | Paciente    |

    Examples: Datos de salida
        | mensaje_error                        |
        | Los datos ingresados son inválidos  |
Feature: HU032: Iniciar sesión 

    Como paciente, familiar o profesional de salud registrado, 
    quiero iniciar sesión en la aplicación 
    para acceder a mi información personalizada. 

Scenario Outline: Inicio de sesión exitoso 
    Dado que el <usuario_rol> tenga una cuenta registrada
    Cuando ingrese credenciales válidas como <correo> y <contraseña>
    Entonces el sistema permitirá el acceso a la cuenta. 

    Examples: Datos de entrada
        | usuario_rol | correo             | contraseña |
        | Paciente    | juan@email.com     | pass123    |
        | Profesional | torres@email.com   | doc456     |


Scenario Outline: Credenciales incorrectas 
    Dado que el <usuario_rol> intente iniciar sesión
    When ingrese credenciales incorrectas en la pantalla de ingreso
    Then el sistema mostrará un <mensaje_alerta> indicando que el correo o contraseña son inválidos. 

    Examples: Datos de entrada
        | usuario_rol |
        | Paciente    |

    Examples: Datos de salida
        | mensaje_alerta                     |
        | El correo o contraseña son inválidos |
Feature: HU033: Recuperar contraseña 

    Como paciente, familiar o profesional de salud registrado, 
    quiero recuperar mi contraseña 
    para volver a acceder a mi cuenta en caso de olvido. 

Scenario Outline: Recuperación correcta de contraseña 
    Dado que el <usuario_rol> acceda a la opción de recuperación
    Cuando ingrese un <correo_registrado>
    Entonces el sistema enviará instrucciones para recuperar la contraseña. 

    Examples: Datos de entrada
        | usuario_rol | correo_registrado |
        | Paciente    | juan@email.com    |
        | Familiar    | maria@email.com   |

    Examples: Datos de salida
        | resultado                                 |
        | Correo enviado con las instrucciones     |


Scenario Outline: Correo no registrado 
    Dado que el <usuario_rol> acceda a la recuperación de contraseña
    When ingrese un <correo_no_registrado>
    Then el sistema mostrará un <mensaje_error> indicando que el correo no existe en la plataforma.

    Examples: Datos de entrada
        | usuario_rol | correo_no_registrado |
        | Paciente    | falso@email.com      |

    Examples: Datos de salida
        | mensaje_error                             |
        | El correo no existe en la plataforma      |
Feature: HU034: Editar información de perfil 

    Como paciente, familiar o profesional de salud registrado, 
    quiero editar mi información de perfil 
    para mantener mis datos actualizados. 

Scenario Outline: Actualización correcta del perfil 
    Dado que el <usuario_rol> acceda a su perfil
    Cuando modifique y guarde su información personal en los campos libres
    Entonces el sistema actualizará correctamente los datos del perfil. 

    Examples: Datos de entrada
        | usuario_rol |
        | Paciente    |
        | Familiar    | 

    Examples: Datos de salida
        | resultado                        |
        | Datos guardados correctamente    |


Scenario Outline: Error al actualizar perfil 
    Dado que el <usuario_rol> acceda a su perfil
    When ocurra un problema al guardar los cambios en la plataforma
    Then el sistema mostrará un <mensaje_falla> indicando que no fue posible actualizar la información. 

    Examples: Datos de entrada
        | usuario_rol |
        | Profesional |

    Examples: Datos de salida
        | mensaje_falla                              |
        | No fue posible actualizar la información   |
Feature: HU035: Registrar perfil de un familiar/paciente

    Como familiar, 
    quiero registrar el perfil de un familiar o paciente 
    para gestionar mejor su información relacionada con medicamentos. 

Scenario Outline: Registro correcto del perfil
Dado que el <familiar> acceda a la sección de perfiles
Cuando ingrese la <información> de un paciente
Entonces el sistema <registrará correctamente> el perfil asociado. 


Examples: Datos de entrada
    | familiar | | Nombre paciente | | Edad | | Enfermedades | Fecha de nacimiento |
    | Juan | | Pablo Perez | | 56 | | Diabetes | 19/04/1970 |
    | Richard | | Maria Guitierrez | | 76 | | Neumonia | 13/08/1950 |

Examples: Datos de salida
    | Mensaje |
    | Registro correcto |


Scenario Outline: Datos incompletos de perfil
Dado que el familiar acceda al formulario de registro
Cuando ingrese información incompleta
Entonces el sistema mostrará un <mensaje> indicando que faltan datos obligatorios. 


Examples: Datos de entrada
    | familiar | | Nombre paciente | | Edad | | Enfermedades | Fecha de nacimiento |
    | Juan | | Pablo Perez | | 56 | | Diabetes | * |
    | Richard | | Maria Guitierrez | | 76 | | --- | 13/08/1950 |

Examples: Datos de salida
    | Mensaje |
    | Fecha de nacimiento incorrecto |
    | No ingreso las enfermedades que posee el paciente |

Feature: HU036: Gestionar medicamentos frecuentes de un familiar

    Como familiar,
    quiero gestionar medicamentos frecuentes de un familiar
    para llevar un mejor control de su tratamiento.

  Scenario Outline: Registro de medicamentos frecuentes de un paciente
    Dado que el <familiar> acceda al perfil de un paciente registrado
    Cuando agregue un <medicamento> frecuente al perfil del paciente
    Entonces el sistema guardará correctamente la <información> del medicamento asociado al paciente.

    Examples: Datos de entrada
      | familiar | Nombre paciente  | medicamento    | información          |
      | Juan     | Pablo Perez      | Metformina     | 500mg - 2 veces/día  |
      | Richard  | Maria Gutierrez  | Amoxicilina    | 250mg - 3 veces/día  |

    Examples: Datos de salida
      | Mensaje                        |
      | Medicamento guardado correctamente |


  Scenario Outline: Ausencia de medicamentos frecuentes registrados
    Dado que el <familiar> acceda a la sección de medicamentos frecuentes del paciente
    Cuando no existan medicamentos registrados
    Entonces el sistema mostrará un <mensaje> indicando que no existen medicamentos frecuentes guardados para el paciente.

    Examples: Datos de entrada
      | familiar | Nombre paciente  |
      | Juan     | Pablo Perez      |
      | Richard  | Maria Gutierrez  |

    Examples: Datos de salida
      | mensaje                                                       |
      | No existen medicamentos frecuentes guardados para el paciente |
Feature: HU037: Configurar recordatorios de medicamentos frecuentes de un familiar

    Como familiar o cuidador,
    quiero configurar recordatorios de medicamentos
    para ayudar al paciente a seguir correctamente su tratamiento.

  Scenario Outline: Configuración correcta de recordatorios
    Dado que el <familiar> acceda a la sección de recordatorios del paciente
    Cuando configure el <horario> y <medicamento> correspondiente
    Entonces el sistema registrará correctamente el <recordatorio> asociado al paciente.

    Examples: Datos de entrada
      | familiar | Nombre paciente  | medicamento  | horario   |
      | Juan     | Pablo Perez      | Metformina   | 08:00 AM  |
      | Richard  | Maria Gutierrez  | Amoxicilina  | 02:00 PM  |

    Examples: Datos de salida
      | recordatorio                       |
      | Recordatorio configurado correctamente |


  Scenario Outline: Datos incompletos en el recordatorio
    Dado que el <familiar> acceda a la configuración de recordatorios
    Cuando no complete la información requerida del <medicamento> o <horario>
    Entonces el sistema mostrará un <mensaje> indicando que faltan datos para configurar el recordatorio.

    Examples: Datos de entrada
      | familiar | Nombre paciente  | medicamento  | horario |
      | Juan     | Pablo Perez      | Metformina   | *       |
      | Richard  | Maria Gutierrez  | ---          | 02:00 PM|

    Examples: Datos de salida
      | mensaje                                    |
      | Horario del recordatorio no ingresado      |
      | Medicamento del recordatorio no ingresado  |
Feature: HU038: Configurar preferencias y notificaciones

    Como paciente, familiar o profesional de salud,
    quiero configurar preferencias y notificaciones
    para recibir información relevante según mis necesidades.

  Scenario Outline: Configuración correcta de preferencias
    Dado que el <usuario> acceda a la configuración
    Cuando modifique sus <preferencias> y <notificaciones>
    Entonces el sistema guardará correctamente los <cambios> realizados.

    Examples: Datos de entrada
      | usuario                   | preferencias             | notificaciones          |
      | Paciente - Juan           | Idioma: Español          | Alertas de medicamentos |
      | Familiar - Maria          | Tema: Oscuro             | Recordatorios diarios   |
      | Prof. Salud - Dr. Torres  | Unidades: mg/mL          | Alertas sanitarias      |

    Examples: Datos de salida
      | cambios                              |
      | Preferencias actualizadas correctamente |


  Scenario Outline: Error en la configuración por conexión a internet
    Dado que el <usuario> acceda a la configuración
    Cuando ocurra un problema al guardar las <preferencias>
    Entonces el sistema mostrará un <mensaje> indicando que no fue posible actualizar la configuración.

    Examples: Datos de entrada
      | usuario                   | preferencias    |
      | Paciente - Juan           | Tema: Oscuro    |
      | Familiar - Maria          | Idioma: Inglés  |

    Examples: Datos de salida
      | mensaje                                          |
      | No fue posible actualizar la configuración       |
Feature: HU039: Consulta de información técnica de medicamentos

    Como profesional de salud,
    quiero consultar información técnica de medicamentos,
    para orientar correctamente a los pacientes.

  Scenario Outline: Visualización de información técnica
    Dado que el <profesional> acceda al detalle de un <medicamento>
    Cuando consulte la información técnica del producto
    Entonces el sistema mostrará <composición>, <indicaciones> y <datos_científicos> del medicamento.

    Examples: Datos de entrada
      | profesional       | medicamento   |
      | Dr. Torres        | Metformina    |
      | Dra. Quispe       | Amoxicilina   |

    Examples: Datos de salida
      | composición               | indicaciones              | datos_científicos         |
      | Metformina HCl 500mg      | Diabetes tipo 2           | Estudio clínico 2021      |
      | Amoxicilina trihidrato    | Infecciones bacterianas   | Guía OMS 2022             |


  Scenario Outline: Información técnica no disponible
    Dado que el <profesional> acceda al detalle de un <medicamento>
    Cuando la información técnica no se encuentre registrada
    Entonces el sistema mostrará un <mensaje> indicando que la información no está disponible.

    Examples: Datos de entrada
      | profesional   | medicamento      |
      | Dr. Torres    | MedicamentoXYZ   |
      | Dra. Quispe   | ProductoABC      |

    Examples: Datos de salida
      | mensaje                                       |
      | La información técnica no está disponible     |
Feature: HU040: Búsqueda rápida de medicamentos

    Como profesional de salud,
    quiero realizar búsquedas rápidas de medicamentos,
    para acceder a información en menor tiempo.

  Scenario Outline: Búsqueda rápida exitosa
    Dado que el <profesional> se encuentre en la sección de búsqueda
    Cuando ingrese el <nombre> de un medicamento válido
    Entonces el sistema mostrará inmediatamente los <resultados> relacionados.

    Examples: Datos de entrada
      | profesional   | nombre        |
      | Dr. Torres    | Metformina    |
      | Dra. Quispe   | Amoxicilina   |

    Examples: Datos de salida
      | resultados                                        |
      | Metformina 500mg - Antidiabético oral             |
      | Amoxicilina 250mg - Antibiótico de amplio espectro|


  Scenario Outline: Medicamento no encontrado
    Dado que el <profesional> se encuentre en la sección de búsqueda
    Cuando ingrese un <medicamento> inexistente
    Entonces el sistema mostrará un <mensaje> indicando que no se encontraron resultados.

    Examples: Datos de entrada
      | profesional   | medicamento     |
      | Dr. Torres    | MedicamentoXYZ  |
      | Dra. Quispe   | ProductoABC     |

    Examples: Datos de salida
      | mensaje                              |
      | No se encontraron resultados         |
Feature: HU041: Visualización de alertas sanitarias relevantes

    Como profesional de salud,
    quiero visualizar alertas sanitarias relevantes,
    para prevenir riesgos relacionados con medicamentos.

  Scenario Outline: Consulta de alertas sanitarias
    Dado que el <profesional> acceda a la sección de alertas
    Cuando existan <alertas> sanitarias activas
    Entonces el sistema mostrará <información> actualizada sobre medicamentos riesgosos.

    Examples: Datos de entrada
      | profesional   | alertas                        |
      | Dr. Torres    | Retiro de lote Ibuprofeno      |
      | Dra. Quispe   | Contraindicación Paracetamol   |

    Examples: Datos de salida
      | información                                              |
      | Alerta: Lote LT-2024 de Ibuprofeno retirado del mercado  |
      | Alerta: Paracetamol contraindicado en falla hepática     |


  Scenario Outline: Ausencia de alertas sanitarias
    Dado que el <profesional> acceda a la sección de alertas
    Cuando no existan alertas registradas
    Entonces el sistema mostrará un <mensaje> indicando que no hay alertas disponibles.

    Examples: Datos de entrada
      | profesional   |
      | Dr. Torres    |
      | Dra. Quispe   |

    Examples: Datos de salida
      | mensaje                          |
      | No hay alertas disponibles       |
Feature: HU042: Recomendación de medicamentos seguros

    Como profesional de salud,
    quiero acceder a información confiable de medicamentos,
    para recomendar opciones seguras a los pacientes.

  Scenario Outline: Recomendación de medicamento verificado
    Dado que el <profesional> consulte un <medicamento> registrado
    Cuando la información sea válida y confiable
    Entonces el sistema permitirá visualizar los <datos> necesarios para su recomendación.

    Examples: Datos de entrada
      | profesional   | medicamento   |
      | Dr. Torres    | Metformina    |
      | Dra. Quispe   | Amoxicilina   |

    Examples: Datos de salida
      | datos                                              |
      | Dosis, indicaciones y contraindicaciones visibles  |


  Scenario Outline: Medicamento con restricciones
    Dado que el <profesional> consulte un <medicamento> restringido
    Cuando existan <alertas> o riesgos asociados
    Entonces el sistema mostrará <advertencias> relacionadas al producto.

    Examples: Datos de entrada
      | profesional   | medicamento         | alertas                        |
      | Dr. Torres    | Tramadol            | Alto potencial de dependencia  |
      | Dra. Quispe   | Codeína             | Prohibido en menores de 12 años|

    Examples: Datos de salida
      | advertencias                                         |
      | Advertencia: medicamento con alto riesgo de abuso    |
      | Advertencia: uso restringido en población pediátrica |
Feature: HU043: Guardado de medicamentos consultados frecuentemente

    Como profesional de salud,
    quiero guardar medicamentos consultados frecuentemente,
    para acceder rápidamente a ellos posteriormente.

  Scenario Outline: Almacenamiento de medicamento frecuente
    Dado que el <profesional> consulte un <medicamento>
    Cuando seleccione la opción de guardar
    Entonces el sistema almacenará el <medicamento> en la lista de frecuentes.

    Examples: Datos de entrada
      | profesional   | medicamento   |
      | Dr. Torres    | Metformina    |
      | Dra. Quispe   | Amoxicilina   |

    Examples: Datos de salida
      | mensaje                                   |
      | Medicamento guardado en lista de frecuentes |


  Scenario Outline: Visualización de medicamentos frecuentes
    Dado que el <profesional> acceda a la sección de frecuentes
    Cuando existan <medicamentos> almacenados
    Entonces el sistema mostrará la <lista> de medicamentos guardados.

    Examples: Datos de entrada
      | profesional   | medicamentos                    |
      | Dr. Torres    | Metformina, Atorvastatina       |
      | Dra. Quispe   | Amoxicilina, Ibuprofeno         |

    Examples: Datos de salida
      | lista                                          |
      | Lista de medicamentos frecuentes visible       |
Feature: HU044: Acceso a consultas frecuentes

    Como profesional de salud,
    quiero acceder rápidamente a mis consultas frecuentes,
    para optimizar el tiempo de atención al paciente.

  Scenario Outline: Acceso a consultas frecuentes
    Dado que el <profesional> acceda a la sección de consultas frecuentes
    Cuando existan <registros> almacenados
    Entonces el sistema mostrará el <historial> de consultas frecuentes realizadas.

    Examples: Datos de entrada
      | profesional   | registros                              |
      | Dr. Torres    | Metformina, Atorvastatina              |
      | Dra. Quispe   | Amoxicilina, Paracetamol, Ibuprofeno  |

    Examples: Datos de salida
      | historial                                    |
      | Historial de consultas frecuentes visible    |


  Scenario Outline: Ausencia de consultas frecuentes
    Dado que el <profesional> acceda a la sección de consultas frecuentes
    Cuando no existan registros almacenados
    Entonces el sistema mostrará un <mensaje> indicando que no existen consultas guardadas.

    Examples: Datos de entrada
      | profesional   |
      | Dr. Torres    |
      | Dra. Quispe   |

    Examples: Datos de salida
      | mensaje                               |
      | No existen consultas guardadas        |
Feature: HU045: Visualizar consejos de seguridad

    Como paciente o familiar,
    quiero visualizar consejos de seguridad sobre medicamentos
    para reducir riesgos al momento de consumirlos.

  Scenario Outline: Visualización correcta de consejos
    Dado que el <usuario> acceda a la sección de consejos
    Cuando seleccione <contenido> de seguridad
    Entonces el sistema mostrará <recomendaciones> sobre el uso seguro de medicamentos y prevención de riesgos.

    Examples: Datos de entrada
      | usuario              | contenido                        |
      | Paciente - Juan      | Uso correcto de antibióticos     |
      | Familiar - Maria     | Almacenamiento de medicamentos   |

    Examples: Datos de salida
      | recomendaciones                                                 |
      | No interrumpir el ciclo de antibióticos sin indicación médica  |
      | Guardar medicamentos en lugar fresco y seco, fuera del alcance |


  Scenario Outline: Ausencia de consejos de seguridad
    Dado que el <usuario> acceda a la sección de consejos de seguridad
    Cuando no existan consejos disponibles
    Entonces el sistema mostrará un <mensaje> indicando que no existen consejos de seguridad disponibles.

    Examples: Datos de entrada
      | usuario              |
      | Paciente - Juan      |
      | Familiar - Maria     |

    Examples: Datos de salida
      | mensaje                                              |
      | No existen consejos de seguridad disponibles         |
Feature: HU046: Consultar información preventiva

    Como paciente, familiar o profesional de salud,
    quiero consultar información preventiva
    para conocer medidas de seguridad relacionadas con medicamentos.

  Scenario Outline: Consulta correcta de información preventiva
    Dado que el <usuario> acceda a la sección preventiva
    Cuando seleccione un <tema> relacionado
    Entonces el sistema mostrará <información> actualizada sobre medidas de prevención y seguridad en medicamentos.

    Examples: Datos de entrada
      | usuario                   | tema                                  |
      | Paciente - Juan           | Interacciones medicamentosas          |
      | Familiar - Maria          | Sobredosis: qué hacer                 |
      | Prof. Salud - Dr. Torres  | Automedicación y sus riesgos          |

    Examples: Datos de salida
      | información                                                             |
      | Evitar combinar anticoagulantes con AINEs sin supervisión médica        |
      | Ante sobredosis, llamar al centro de toxicología inmediatamente         |
      | La automedicación puede enmascarar síntomas y retrasar diagnósticos     |


  Scenario Outline: Información no disponible
    Dado que el <usuario> acceda a la sección preventiva
    Cuando no exista contenido disponible
    Entonces el sistema mostrará un <mensaje> indicando que no existe información preventiva disponible.

    Examples: Datos de entrada
      | usuario                   |
      | Paciente - Juan           |
      | Prof. Salud - Dr. Torres  |

    Examples: Datos de salida
      | mensaje                                           |
      | No existe información preventiva disponible       |
Feature: HU047: Acceder a contenido educativo sobre medicamentos falsificados

    Como paciente, familiar o profesional de salud,
    quiero acceder a contenido educativo sobre medicamentos falsificados
    para aprender a identificarlos y evitarlos.

  Scenario Outline: Acceso correcto al contenido educativo
    Dado que el <usuario> acceda a la sección educativa
    Cuando seleccione <contenido> sobre medicamentos falsificados
    Entonces el sistema mostrará <información> y <recomendaciones> para identificar y evitar medicamentos falsificados.

    Examples: Datos de entrada
      | usuario                   | contenido                                 |
      | Paciente - Juan           | Cómo identificar medicamentos falsos      |
      | Familiar - Maria          | Riesgos del mercado informal              |
      | Prof. Salud - Dr. Torres  | Señales visuales de falsificación         |

    Examples: Datos de salida
      | información                                          | recomendaciones                                 |
      | Sellos de seguridad, hologramas y registros DIGEMID  | Comprar solo en farmacias autorizadas           |
      | Precios inusualmente bajos pueden indicar falsedad   | Verificar número de registro sanitario          |


  Scenario Outline: Error al acceder al contenido
    Dado que el <usuario> acceda a la sección educativa
    Cuando no exista contenido educativo disponible
    Entonces el sistema mostrará un <mensaje> indicando que no existe contenido educativo disponible.

    Examples: Datos de entrada
      | usuario                   |
      | Paciente - Juan           |
      | Prof. Salud - Dr. Torres  |

    Examples: Datos de salida
      | mensaje                                          |
      | No existe contenido educativo disponible         |
Feature: HU048: Visualizar recomendaciones oficiales de seguridad

    Como paciente, familiar o profesional de salud,
    quiero visualizar recomendaciones oficiales de seguridad
    para utilizar medicamentos de manera segura.

  Scenario Outline: Visualización correcta de recomendaciones
    Dado que el <usuario> acceda a la sección de recomendaciones
    Cuando consulte la <información> disponible
    Entonces el sistema mostrará <recomendaciones> oficiales respaldadas por entidades de salud confiables.

    Examples: Datos de entrada
      | usuario                   | información                             |
      | Paciente - Juan           | Recomendaciones OMS sobre analgésicos   |
      | Familiar - Maria          | Guía MINSA para uso de antibióticos     |
      | Prof. Salud - Dr. Torres  | Protocolo DIGEMID de dispensación       |

    Examples: Datos de salida
      | recomendaciones                                                        |
      | OMS: No usar analgésicos opioides sin prescripción médica             |
      | MINSA: Completar el tratamiento antibiótico indicado por el médico    |
      | DIGEMID: Verificar registro sanitario antes de dispensar              |


  Scenario Outline: Recomendaciones no disponibles
    Dado que el <usuario> acceda a la sección de recomendaciones
    Cuando no existan recomendaciones disponibles
    Entonces el sistema mostrará un <mensaje> indicando que no existen recomendaciones oficiales disponibles.

    Examples: Datos de entrada
      | usuario                   |
      | Paciente - Juan           |
      | Prof. Salud - Dr. Torres  |

    Examples: Datos de salida
      | mensaje                                               |
      | No existen recomendaciones oficiales disponibles      |
Feature: HU049: Consultar buenas prácticas de consumo de medicamentos

    Como paciente o familiar,
    quiero consultar buenas prácticas de consumo de medicamentos
    para evitar riesgos en su uso.

  Scenario Outline: Consulta correcta de buenas prácticas
    Dado que el <usuario> acceda a la sección de buenas prácticas
    Cuando seleccione un <tema> relacionado con el consumo de medicamentos
    Entonces el sistema mostrará <recomendaciones> para el consumo seguro y responsable de medicamentos.

    Examples: Datos de entrada
      | usuario              | tema                                   |
      | Paciente - Juan      | Horarios y dosis correctas             |
      | Familiar - Maria     | Almacenamiento adecuado de medicamentos|

    Examples: Datos de salida
      | recomendaciones                                                         |
      | Tomar medicamentos a la misma hora cada día y respetar la dosis indicada|
      | Guardar en lugar fresco, seco y fuera del alcance de niños              |


  Scenario Outline: Ausencia de buenas prácticas disponibles
    Dado que el <usuario> acceda a la sección de buenas prácticas
    Cuando no exista información disponible
    Entonces el sistema mostrará un <mensaje> indicando que no existen recomendaciones disponibles.

    Examples: Datos de entrada
      | usuario              |
      | Paciente - Juan      |
      | Familiar - Maria     |

    Examples: Datos de salida
      | mensaje                                   |
      | No existen recomendaciones disponibles    |
Feature: HU050: Personalización de recomendaciones según síntomas

    Como paciente,
    quiero registrar mis síntomas,
    para recibir recomendaciones de medicamentos más seguros personalizadas.

  Scenario Outline: Registro exitoso de síntomas y alergias
    Dado que el <paciente> acceda a la sección de perfil de salud
    Cuando registre sus <síntomas> y <alergias>
    Entonces el sistema almacenará la <información> correctamente.

    Examples: Datos de entrada
      | paciente    | síntomas              | alergias         |
      | Juan        | Fiebre, dolor cabeza  | Penicilina       |
      | Maria       | Tos, congestión       | Aspirina, Polen  |

    Examples: Datos de salida
      | información                                 |
      | Síntomas y alergias registrados correctamente |


  Scenario Outline: Recomendaciones personalizadas según alergias
    Dado que el <paciente> tenga <alergias> registradas
    Cuando consulte <medicamentos> en la aplicación
    Entonces el sistema priorizará <recomendaciones> compatibles y mostrará <advertencias> preventivas.

    Examples: Datos de entrada
      | paciente | alergias   | medicamentos             |
      | Juan     | Penicilina | Amoxicilina, Paracetamol |
      | Maria    | Aspirina   | Ibuprofeno, Vitamina C   |

    Examples: Datos de salida
      | recomendaciones                                 | advertencias                                       |
      | Paracetamol (compatible con alergia a Penicilina)| Advertencia: Amoxicilina contiene Penicilina      |
      | Vitamina C (compatible con alergia a Aspirina)  | Advertencia: Ibuprofeno puede reaccionar con Aspirina|
