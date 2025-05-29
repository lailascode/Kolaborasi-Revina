$(document).ready(function(){
    var $grid = $('.collection-list').isotope({
        itemSelector: '.col-md-6',
        layoutMode: 'fitRows'
    });

    // Filter berdasarkan tombol
    $('.filter-button-group button').on('click', function(){
        var filterValue = $(this).attr('data-filter');
        resetFiltersBtns();
        $(this).addClass('active-filter-btn');
        $grid.isotope({ filter: filterValue });
    });

    // Pencarian berdasarkan input teks
    $('#search-input').on('keyup', function(){
        var searchText = $(this).val().toLowerCase();
        $('.collection-list .col-md-6').each(function(){
            var itemText = $(this).text().toLowerCase();
            if(itemText.includes(searchText)){
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns() {
    filterBtns.each(function() {
        $(this).removeClass('active-filter-btn');
    });
}