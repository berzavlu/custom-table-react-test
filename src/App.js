import TableRow from './tablerow'
import dataTable from './dataTable'
import headTable from './headTable'
import './App.scss';

function App() {
  return (
    <div className="wrapTable">
      <div className='tableClaimsTable__table'>
        <div className='tableClaimsTable__table-row tableClaimsTable__table-header'>
          {headTable.map((head, key) => (
            <div key={key} className={`tableClaimsTable__table-column ${head.class}`}>
              {head.name}
            </div>
          ))}
        </div>
        {dataTable.map((item, key) => (
          <TableRow key={key} height='94px'>
            <div className='tableClaimsTable__table-column nroClaim'>
              <div className='tableClaimsTable__table-column--mobile '>
                <div className='tableClaimsTable__table-nroClaim'>
                  {item.contacto.nombre}
                </div>
              </div>
              <div className='tableClaimsTable__table-column--desktop '>
                {item.canalReclamo.numeroReclamo}
              </div>
            </div>
            <div className='tableClaimsTable__table-column insurance'>
              <div className='tableClaimsTable__table-column--mobile '>
                <div className='tableClaimsTable__table-insurance'>
                  {item.canalReclamo.numeroReclamo}
                </div>
              </div>
              <div className='tableClaimsTable__table-column--desktop '>
                {item.contacto.nombre}
              </div>
            </div>
            <div className='tableClaimsTable__table-column claimant'>
              <div className='tableClaimsTable__table-column--mobile'>
                <div className='tableClaimsTable__table--mobile-separator' />
                <div className='tableClaimsTable__table--mobile-label'>Asunto</div>
                <div className='tableClaimsTable__table--mobile-labelValue'>
                  {item.tipificacion.asunto}
                </div>
              </div>
              <div className='tableClaimsTable__table-column--desktop'>
                {item.tipificacion.asunto}
              </div>
            </div>
            <div className='tableClaimsTable__table-column registerDate'>
              <div className='tableClaimsTable__table-column--mobile'>
                <div className='tableClaimsTable__table--mobile-label'>Registro</div>
                <div className='tableClaimsTable__table--mobile-labelValue'>
                  Fecha
                </div>
              </div>
              <div className='tableClaimsTable__table-column--desktop '>
              Fecha
              </div>
            </div>
            <div className='tableClaimsTable__table-column state'>
              {item.estado.descripcion}
            </div>
            <div className='tableClaimsTable__table-column actions'>
              <div className='tableClaimsTable__table-title'>
                <div className='tableClaimsTable__dependent'>
                  descargar
                </div>
              </div>
            </div>
            <div className='tableClaimsTable__table-column actionsTwo'>
              <div className='tableClaimsTable__table-title'>
                <div className='tableClaimsTable__dependent'>
                  Descargar
                </div>
              </div>
            </div>
          </TableRow>
        ))}
      </div>
    </div>
  );
}

export default App;
