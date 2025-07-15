//Creamos la estructura de MongoDB
{
  "IdRepara": 1,
  "NumSerie": "SN001X10A1",
  "IdProd": 1,
  "eventos": [
    {
      "fecha": "2023-05-10T09:30:00Z",
      "descripcion": "Ingreso a taller",
      "notaTecnico": "Equipo entregado por cliente con pantalla dañada.",
      "adjuntos": [
        {
          "tipo": "imagen",
          "url": "https://miempresa.com/imgs/sn001x10a1_entrada.jpg"
        }
      ]
    },
    {
      "fecha": "2023-05-10T11:00:00Z",
      "descripcion": "Reemplazo de pantalla",
      "notaTecnico": "Pantalla reemplazada por modelo compatible. Verificación inicial OK.",
      "adjuntos": []
    },
    {
      "fecha": "2023-05-10T14:00:00Z",
      "descripcion": "Prueba funcional",
      "notaTecnico": "Todo funcionando correctamente. Se cierra la reparación.",
      "adjuntos": [
        {
          "tipo": "documento",
          "url": "https://miempresa.com/docs/test_sn001x10a1.pdf"
        }
      ]
    }
  ]
}

//Insertamos datos en la collection
use ObligatorioMongoDB340181

db.historialReparaciones.insertMany([
  {
    IdRepara: 1,
    NumSerie: "SN001X10A1",
    IdProd: 1,
    eventos: [
      {
        fecha: ISODate("2023-05-10T09:30:00Z"),
        descripcion: "Ingreso a taller",
        notaTecnico: "Equipo entregado por cliente con pantalla dañada.",
        adjuntos: [
          { tipo: "imagen", url: "https://miempresa.com/imgs/sn001x10a1_entrada.jpg" }
        ]
      },
      {
        fecha: ISODate("2023-05-10T11:00:00Z"),
        descripcion: "Reemplazo de pantalla",
        notaTecnico: "Pantalla reemplazada por modelo compatible.",
        adjuntos: []
      }
    ]
  },
  {
    IdRepara: 2,
    NumSerie: "SN002B10B2",
    IdProd: 2,
    eventos: [
      {
        fecha: ISODate("2023-06-01T10:00:00Z"),
        descripcion: "Diagnóstico inicial",
        notaTecnico: "Posible falla en placa base.",
        adjuntos: []
      },
      {
        fecha: ISODate("2023-06-02T12:00:00Z"),
        descripcion: "Reemplazo de pieza",
        notaTecnico: "Cambio de placa madre.",
        adjuntos: [
          { tipo: "imagen", url: "https://miempresa.com/imgs/sn002b10b2_placa.jpg" }
        ]
      }
    ]
  },
  {
    IdRepara: 3,
    NumSerie: "SN003C10C3",
    IdProd: 3,
    eventos: [
      {
        fecha: ISODate("2023-07-15T14:00:00Z"),
        descripcion: "Prueba funcional",
        notaTecnico: "Equipo verificado sin fallas.",
        adjuntos: []
      }
    ]
  }
])

//a) Ver todos los eventos de una reparación por IdRepara
db.historialReparaciones.find(
  { IdRepara: 2 },
  { _id: 0, IdRepara: 1, eventos: 1 }
)

//b) Reparaciones con eventos que mencionan "placa"
db.historialReparaciones.find({
  "eventos.notaTecnico": /placa/i
})

//c) Reparaciones con imágenes adjuntas
db.historialReparaciones.find({
  "eventos.adjuntos.tipo": "imagen"
})

//d) ¿Cuántas reparaciones tuvieron la acción "Reemplazo de pieza"?
db.historialReparaciones.countDocuments({
  "eventos.descripcion": "Reemplazo de pieza"
})


