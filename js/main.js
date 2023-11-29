$(function(){

    var calcType = "";
        term = "first";

    $('#C').on('click', function(){
        $('#space1').val("");
        $('#space2').val("");
        $('#result').val("");
        $('#mark').val("");
        calcType = "";
        term = "first";
    })

    $('#one,#two,#three,#four,#five,#six,#seven,#eight,#nine,#zero').on('click', function(){
        var input = $('#result').val();
        var num = $(this).val();

        if (calcType === "minus" || calcType === "divide") {
            $('#result').val(input + num);
            $('#space2').val(input + num);
        } else {
            $('#result').val(input + num);
            $('#space1').val(input + num);
        }
    })

    // backキーはいったん未実装で保留

    $('#plus').on('click', function(){
        var input = Number($('#space1').val());
        var reInput = Number($('#space2').val());
        $('#mark').val("+");
        $('#space1').val("");
        $('#space2').val(input + reInput);
        $('#result').val("");
        calcType = "plus";
    })

    $('#minus').on('click', function(){
        var input = Number($('#space1').val());
        var reInput = Number($('#space2').val());
        $('#mark').val("−");
        $('#space1').val(input - reInput);
        $('#space2').val("");
        $('#result').val("");
        calcType = "minus";
    })

    $('#times').on('click', function(){
        var input = Number($('#space1').val());
        var reInput = Number($('#space2').val());
        $('#mark').val("×");
        $('#space1').val("");
        $('#space2').val(input * reInput);
        $('#result').val("");
        calcType = "times";

        if (term === "first") {
            $('#space2').val(input);
            term = "second";
        }
    })

    $('#divide').on('click', function(){
        var input = Number($('#space1').val());
        var reInput = Number($('#space2').val());
        $('#mark').val("÷");
        $('#space1').val(input / reInput);
        $('#space2').val("");
        $('#result').val("");
        calcType = "divide";

        if (term === "first") {
            $('#space1').val(input);
            term = "second";
        }
    });

    $('#enter').on('click', function(){
        var input = Number($('#space1').val());
        var reInput = Number($('#space2').val());
        if (calcType === "plus"){
            var cal = input + reInput
        }
        if (calcType === "minus"){
            var cal = input - reInput
        }
        if (calcType === "times"){
            var cal = input * reInput
        }
        if (calcType === "divide"){
            var cal = input / reInput
        }
        $('#result').val(cal);
    })
});