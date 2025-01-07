//PARTE 2

//EN PRODUCTO
public abstract double PrecioFinal(Cliente c);

//EN SANITARIA
public override double PrecioFinal(Cliente c)
{
    double total = Precio;
    if(_isImportado) total *= 1.05;
    return total;
}

//EN ELECTRICIDAD
public override double PrecioFinal(Cliente c)
{
    double total = Precio;
    if(_esAprobadoUte && c.CalcularAntiguedad() > 5) total *= 0.9;
    return total;
}

//EN PRODUCTOVENTA
public double SubTotal(Cliente c)
{
    double subtotal = _producto.PrecioFinal(c) * _cant;
    if(!string.IsNullOrEmpty(_instrucciones)) subTotal += 30;
    return subtotal;
}

//EN VENTA : IComparable<Venta>
public double CalcularTotal()
{
    double total = 0;
    foreach(VentaProducto vp in _productos)
    {
        total += vp.Subtotal(_cliente);
    }

    if(_esWeb) total += 500;
    return total;
}

public double CantidadArticulos()
{
    int total = 0;
    foreach(VentaProducto vp in _productos)
    {
        total += vp.Cant;
    }
    return total;
}

public int CompareTo(Venta other)
{
    return this._fecha.CompareTo(other._fecha);
}

//EN CLIENTE
public int CalcularAntiguedad()
{
    return DateTime.Today.Year - _fecha.Year;
}

public override bool Equals(object obj)
{
    Cliente c = obj as Cliente;
    return c != null && this._doc == c._doc;
}

//EN SISTEMA

public List<Venta> VentasPorCliente(Cliente c)
{
    List<Venta> buscadas = new List<Venta>();
    foreach(Venta v in _ventas)
    {
        if(v.Cliente.Equals(c)) buscadas.Add(v);
    }

    buscadas.Sort();
    return buscadas;
}

//PARTE 3A

//EN FABRICANTE : IValidable
public Fabricante(string nombre, string codigo, int calificacion)
{
    _nombre = nombre;
    _codigo = codigo;
    _calificacion = calificacion;
}

public void Validar()
{
    if(string.IsNullOrEmpty(_nombre) || _nombre.Lenght < 3) throw new Exception("El nombre deber tener al menos 3 caracteres");
    if(string.IsNullOrEmpty(_codigo) || _codigo.Lenght != 6) throw new Exception("El codigo debe tener 6 caracteres");
    if(_calificacion < 1 || calificacion > 3) throw new Exception("La calificacion debe estar entre 1 y 3");
}

public override bool Equals(object obj)
{
    Fabricante f = obj as Fabricante;
    return f != null && this._codigo == f._codigo;
}

//EN SISTEMA
public void AltaFabricante(Fabricante f)
{
    if(f == null) throw new Exception("El fabicante no puede ser nulo");
    f.Validar();
    if(_fabricantes.Contains(f)) throw new Exception("Ya existe fabricante con ese codigo");
    _fabricantes.Add(f);
}

//En FabricantesController

[HttpGet]
public IActionResult Alta()
{
    return View();
}

[HttpPost]
public IActionResult Alta(string nombre, string codigo, int calificacion)
{
    try
    {
        if(string.IsNullOrEmpty(nombre))throw new Exception("Debe ingresar nombre");
        if(string.IsNullOrEmpty(codigo))throw new Exception("Debe ingresar codigo");
        Fabricante f = new Fabricante(nombre, codigo, calificacion);
        Sistema.Instancia.AltaFabricante(f);
        ViewBag.Mensaje = "Fabricante dado de alta";
    }
    catch(Exception ex)
    {
        ViewBag.Mensaje = ex.Message;
    }
    return View();
}

//PARTE 3B

//EN CONTROLADOR VentasController

public IActionResult VentasPorCliente()
{
    return View();
}

public IActionResult ProcesarVentasPorCliente(string docCliente)
{
    try
    {
        if(string.IsNullOrEmpty(docCliente)) throw new Exception("Documento vacio");
        Cliente buscado = Sistema.Instancia.ObtenerClientePorDocumento(docCliente);
        if(buscado == null) throw new Exception("No se encontró el cliente");
        ViewBag.Ventas = Sistema.Instancia.VentasPorCliente(buscado);
    }
    catch(Exception ex)
    {
        ViewBag.Mensaje = ex.Message;
    }

    return View("VentasPorCliente");
}

//EN SISTEMA
public Cliente ObtenerClientePorDocumento(string doc)
{
    Cliente buscado = null;
    int i = 0;
    while(buscado == null && i < _clientes.Count)
    {
        if(_clientes[i].Doc == doc) buscado = _clientes[i];
        i++;
    }

    return buscado;
}