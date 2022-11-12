import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Selection, Search, Page, ExcelExport, PdfExport, Edit, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import Header from '../components/Header';

const Customers = () =>
{
  let grid;
  const toolbar = ['PdfExport', 'ExcelExport', 'Search', 'Delete']
  const toolbarClick = (args) =>
  {
    if (grid && args.item.id === 'grid_pdfexport')
    {
      grid.pdfExport();
    }
    if (grid && args.item.id === 'grid_excelexport')
    {
      grid.excelExport();
    }

  }
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl' >
      <Header category='page' title='Customers' />
      <GridComponent
        id='grid'
        dataSource={customersData}
        allowPaging
        allowSorting
        allowExcelExport={true}
        allowPdfExport={true}
        toolbar={toolbar}
        ref={g => grid = g}
        toolbarClick={toolbarClick}
        editSettings={{
          allowDeleting: true,
          allowEditing: true
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Search, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport, Toolbar,Selection]} />
      </GridComponent>
    </div>
  )
}

export default Customers