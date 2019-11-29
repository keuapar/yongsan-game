$(document).ready(function () {

    // stl_viewer
    if ($('#stl_cont').length) {
        var stl_viewer = new StlViewer(
            $('#stl_cont')[0], {
                models: {
                    id: 55, filename: '_1.stl', display: 'smooth', rotationx: -0.75
                }
            }
        );
        //stl_viewer.add_model({id: 55, filename: 'house1.stl'});
        //console.log(JSON.stringify(stl_viewer.get_model_info(55)));
    }

});
