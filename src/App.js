import './App.css';
import '@grapecity/wijmo.styles/wijmo.css';
import { getOrderList } from './data';

import * as wjOlap from '@grapecity/wijmo.olap';
import * as wjcOlap from '@grapecity/wijmo.react.olap';

import { useState } from 'react';

function App() {
  const [ng, setNG] = useState(new wjOlap.PivotEngine({
    itemsSource: getOrderList(1000),
    fields: [
      { binding: 'date', header: 'Quarter', format: '\"Q\"q yyyy' },
      { binding: 'date', header: 'Month', format: 'MMMM' },
      { binding: 'agent', header: 'Agent' },
      { binding: 'region', header: 'Region' },
      { binding: 'platform', header: 'Platform' },
      { binding: 'product', header: 'Product' },
      { binding: 'sales', header: 'Sales', format: 'c2' },
      { binding: 'downloads', header: 'Downloads', format: 'n0' },
      { binding: 'revenue', header: 'Revenue', format: 'c2' },
    ]
  }));
  wjOlap.PivotPanel.controlTemplate = `<div class="root">  
    <div class="field-list-label">  
      <label wj-part="g-flds"></label>  
    </div>  
    <div class="field-list pad">  
      <div wj-part="d-fields"></div>  
    </div>  
    <div class="drag-areas-label">  
      <label wj-part="g-drag"></label>  
    </div>  
    <div class="filter-list pad">  
      <label>  
        <span class="wj-glyph wj-glyph-filter"></span>  
        <span wj-part="g-flt"></span>  
      </label>  
      <div wj-part="d-filters"></div>  
    </div>  
    <div class="column-list pad bdr-left">  
      <label>  
        <span class="wj-glyph">⫴</span>  
        <span wj-part="g-cols"></span>  
      </label>  
      <div wj-part="d-cols"></div>  
    </div>  
    <div class="row-list pad bdr-top">  
      <label>  
        <span class="wj-glyph">≡</span>  
        <span wj-part="g-rows"></span>  
      </label>  
      <div wj-part="d-rows"></div>  
    </div>  
    <div class="values-list pad bdr-left bdr-top">  
      <label>  
        <span class="wj-glyph">Σ</span>  
        <span wj-part="g-vals"></span>  
      </label>  
      <div wj-part="d-vals"></div>  
    </div>  
    <div wj-part="d-prog" class="progress-bar"></div>  
    <div class="control-area">  
      <label>  
        <input wj-part="chk-defer" type="checkbox">  
        <span wj-part="g-defer">Defer Updates</span>  
      </label>  
      <button wj-part="btn-update" class="wj-btn wj-state-disabled" type="button" disabled>
        Update  
      </button>  
    </div>  
  </div>`;
  return (
    <div className="App">
      <div className='flextable'>
        <wjcOlap.PivotPanel itemsSource={ng}></wjcOlap.PivotPanel>
        <wjcOlap.PivotGrid itemsSource={ng}></wjcOlap.PivotGrid>
      </div>
    </div>
  );
}

export default App;
