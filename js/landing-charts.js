$(function(){
    'use strict'

    $.plot('#flotChart1', [{
        data: flotSampleData1,
        color: '#494c57'
      }], {
            series: {
                shadowSize: 0,
        lines: {
          show: true,
          lineWidth: 2,
          fill: false,
          fillColor: { colors: [ { opacity: 0 }, { opacity: 0.2 } ] }
        }
            },
      grid: {
        borderWidth: 0,
        labelMargin: 0,
        aboveData: true
      },
            yaxis: {
        show: false,
        reserveSpace: false,
        min: 0,
        max: 120
      },
            xaxis: {
        show: true,
        color: 'rgba(102,16,242,.1)',
        reserveSpace: false,
        ticks: [[0,'1h'],[20,'12h'],[40,'1d'],[60,'1w'],[80,'1m']],
        font: {
          size: 11,
          weight: '700',
          family: 'Archivo,Arial,sans-serif',
          color: '#969dab'
        }
      }
        });

    $.plot('#flotChart2', [{
        data: flotSampleData2,
        color: '#6610f2'
      }], {
            series: {
                shadowSize: 0,
        lines: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: { colors: [ { opacity: 0 }, { opacity: 0.2 } ] }
        }
            },
      grid: {
        borderWidth: 0,
        labelMargin: 0,
        aboveData: true
      },
            yaxis: {
        show: true,
        color: 'rgba(0,0,0,0.06)',
        ticks: [[0, ''], [15, '$6320'], [30, '$6340'], [45, '$6360'], [60, '$6380'], [75, '$6400']],
        min: 0,
        max: 80,
        font: {
          size: 11,
          weight: '600',
          family: 'Archivo, sans-serif',
          color: '#343640'
        }
      },
            xaxis: {
        show: true,
        color: 'rgba(0,0,0,0.1)',
        ticks: [[0, '06:00'], [20, '09:00'], [40, '12:00'], [60, '13:00'], [80, '16:00'], [100, '19:00'], [120, '21:00'], [140, '23:00']],
        font: {
          size: 11,
          family: 'Arial, sans-serif',
          color: '#70737c'
        },
        reserveSpace: false
      }
        });

    $.plot('#flotChart3', [{
        data: flotSampleData5,
        color: '#6610f2'
      }], {
            series: {
                shadowSize: 0,
        lines: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: { colors: [ { opacity: 0 }, { opacity: 0.06 } ] }
        }
            },
      grid: {
        borderWidth: 0,
        labelMargin: 0
      },
            yaxis: {
        show: true,
        min: 0,
        max: 120,
        color: 'rgba(0,0,0,0.08)'
      },
            xaxis: {
        show: true,
        color: 'rgba(0,0,0,0.08)'
      }
        });

    $.plot('#flotChart4', [{
        data: flotSampleData4,
        color: '#00cccc'
      }], {
            series: {
                shadowSize: 0,
        lines: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: { colors: [ { opacity: 0 }, { opacity: 0.06 } ] }
        }
            },
      grid: {
        borderWidth: 0,
        labelMargin: 0
      },
            yaxis: {
        show: true,
        min: 0,
        max: 120,
        color: 'rgba(0,0,0,0.08)'
      },
            xaxis: {
        show: true,
        color: 'rgba(0,0,0,0.08)'
      }
        });

    $.plot('#flotChart5', [{
        data: flotSampleData3,
        color: '#007bff'
      }], {
            series: {
                shadowSize: 0,
        lines: {
          show: true,
          lineWidth: 2,
          fill: true,
          fillColor: { colors: [ { opacity: 0 }, { opacity: 0.06 } ] }
        }
            },
      grid: {
        borderWidth: 0,
        labelMargin: 0
      },
            yaxis: {
        show: true,
        min: 0,
        max: 120,
        color: 'rgba(0,0,0,0.08)'
      },
            xaxis: {
        show: true,
        color: 'rgba(0,0,0,0.08)'
      }
        });

    $('#navComplex').lightSlider({
      autoWidth: true,
      pager: false,
      slideMargin: 3,
      onSliderLoad: function(el) {
        $('.lSPrev').addClass('disabled');
      },
      onBeforeSlide: function(el) {
        var curSlide = el.getCurrentSlideCount();
        var totalSlide = el.getTotalSlideCount();

        if(curSlide === 1) {
          $('.lSPrev').addClass('disabled');
        } else {
          $('.lSPrev').removeClass('disabled');
        }

        if((totalSlide - 3) === curSlide) {
          $('.lSNext').addClass('disabled');
        } else {
          $('.lSNext').removeClass('disabled');
        }
      }
    });

    $('.az-nav-tabs .tab-link').on('click', function(e) {
      e.preventDefault();
      $(this).addClass('active');
      $(this).parent().siblings().find('.tab-link').removeClass('active');

      var target = $(this).attr('href');
      $(target).addClass('active');
      $(target).siblings().removeClass('active');
    })


  });