import * as $ from 'jquery';
import 'jvectormap';
import 'jvectormap/jquery-jvectormap.css';
import './jquery-jvectormap-world-mill.js';
import { debounce } from 'lodash';

export default (function () {
  const vectorMapInit = () => {
    if ($('#world-map-marker').length > 0) {
      // This is a hack, as the .empty() did not do the work
      $('#vmap').remove();

      // we recreate (after removing it) the container div, to reset all the data of the map
      $('#world-map-marker').append(`
        <div
          id="vmap"
          style="
            height: 490px;
            position: relative;
            overflow: hidden;
            background-color: transparent;
          "
        >
        </div>
      `);
	  
	//  $('#vmap').vectorMap({
    //map: 'world_mill', 
    //onRegionClick: function(event, code) {
      //  console.log(code);
    //}
//});
	  
	  
	  
	  

      $('#vmap').vectorMap({
        map: 'world_mill',
	onRegionClick:function(event, code){            
            var name = (code);                          
            window.location.replace("http://www.google.com/");  //+code+""
	},
        backgroundColor: '#fff',
        borderColor: '#fff',
        borderOpacity: 0.25,
        borderWidth: 0,
		color: '#FFA500',
        regionStyle : {
          initial : {
            fill : '#FFA500',
          },
        },

        markerStyle: {
          initial: {
            r: 7,
            'fill': '#fff',
            'fill-opacity':1,
            'stroke': '#000',
            'stroke-width' : 2,
            'stroke-opacity': 0.4,
          },
        },

        markers : [{
          latLng : [21.00, 78.00],
          name : 'INDIA : 350',
        }, {
          latLng : [-33.00, 151.00],
          name : 'Australia : 250',
        }, {
          latLng : [36.77, -119.41],
          name : 'USA : 250',
        }, {
          latLng : [55.37, -3.41],
          name : 'UK   : 250',
        }, {
          latLng : [-22.97, -43.18],
          name : 'Brazil : 250',
        },
		{
          latLng : [39.91, 116.36],
          name : 'China : 265',
        },{
          latLng : [40.46, 3.74],
          name : 'Spain : 270',
        },
		{
          latLng : [46.22,2.21],
          name : 'France : 272',
        },
		{
          latLng : [56.13,106.34],
          name : 'Canada : 274',
        },{
          latLng : [25.20, 55.27],
          name : 'UAE : 250',
        }],
        series: {
          regions: [{
            values: {
              'US': 298,
              'SA': 200,
              'AU': 760,
              'IN': 200,
			  'BR':	560,
              'GB': 120,
			  'CN':	265,
			  'ES': 270,
			  'FR': 272,
			  'CA': 274,
            },
            scale: ['#03a9f3', '#02a7f1'],
            normalizeFunction: 'polynomial',
          }],
        },
        hoverOpacity: null,
        normalizeFunction: 'linear',
        zoomOnScroll: true,
		color: '#007BFF',
        scaleColors: ['#b6d6ff', '#005ace'],
        selectedColor: '#c9dfaf',
        selectedRegions: [],
        enableZoom: true,
		hoverColor: '#fff',
		
      });
    }
  };

  vectorMapInit();
  $(window).resize(debounce(vectorMapInit, 150));
})();
