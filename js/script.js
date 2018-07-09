$(function () {
    $(window).on('wheel', function (e) {

        var delta = e.originalEvent.deltaY;

        if (delta > 0) impress().prev();
        else impress().next();

        return false;
    });
    $("#title-text1").hide();
    $("#guide-text").hide();
    $("#pasfs-text").hide();
    $("#state-diag").hide();
    $("#problems").hide();
    $("#human-err").hide();
    $("#tech-err").hide();
    $("#time-lim").hide();
    $("#questions").hide();
    $("#arrow-one").hide();
    $("#arrow-two").hide();
    window.addEventListener("impress:stepenter", function (event) {
        var currentStep = event.target;
        switch (currentStep.id) {
            case "title":
                $("#title-text1").toggleClass('magictime puffIn');
                $("#title-text1").show();
                break;
            case "bs-img":
                console.log("a");
                break;
            case "vendor-mars-relation":
                $("#state-diag").toggleClass('magictime vanishIn');
                $("#state-diag").show();
                break;
            case "team":
                var count = $("#tasks").children().length;
                for(i = 0; i < count; i++)
                {
                    var delayInMilliseconds = 600/i;
                    setTimeout(function() {
                        impress().next();
                    }, delayInMilliseconds);
                }
                break;
            case "guides":
                $("#guide-text").toggleClass('magictime swap');
                $("#guide-text").show();
                break;
            case "problems":
                $("#known-problems").toggleClass("magictime tinUpIn")
                $("#problems").show();
                $("#human-err").show();
                $("#tech-err").show();
                $("#time-lim").show();
                break;
            case "web":
                var count = $("#feat-web").children().length;
                for(i = 0; i < count; i++)
                {
                    var delayInMilliseconds = 400*i;
                    setTimeout(function() {
                        impress().next();
                    }, delayInMilliseconds);
                }
                break;
            case "gpg":
                var count = $("#feat-gpg").children().length;
                for(i = 0; i < count; i++)
                {
                    var delayInMilliseconds = 400*i;
                    setTimeout(function() {
                        impress().next();
                    }, delayInMilliseconds);
                }
                break;
            case "pdf":
                var count = $("#feat-pdf").children().length;
                for(i = 0; i < count; i++)
                {
                    var delayInMilliseconds = 400*i;
                    setTimeout(function() {
                        impress().next();
                    }, delayInMilliseconds);
                }
                break;
            case "mover":
                var count = $("#feat-mover").children().length;
                for(i = 0; i < count; i++)
                {
                    var delayInMilliseconds = 400*i;
                    setTimeout(function() {
                        impress().next();
                    }, delayInMilliseconds);
                }
                break;
            case "que":
                $("#questions").toggleClass("magictime perspectiveUpReturn")
                $("#questions").show();
        }

    });
    window.addEventListener("impress:stepleave", function (event) {
        var currentStep = event.target;
        switch (currentStep.id) {
            case "title":
                $("#title-text1").toggleClass('magictime puffIn');
                break;
            case "bs-img":
                $("#arrow-one").hide();
                $("#arrow-two").hide();
                break;
            case "vendor-mars-relation":
                $("#state-diag").toggleClass('magictime vanishIn');
                $("#state-diag").hide();
                break;
            case "guides":
                $("#guide-text").toggleClass('magictime swap');
                break;
            case "que":
                $("#questions").toggleClass("magictime perspectiveUpReturn")
                $("#questions").hide();
        }
    });
    window.addEventListener("impress:substep:stepleaveaborted", function (event) {
        var currentStep = event.target;
        switch (currentStep.id) {
        case "bs-img":
            switch(event.detail["substep"].id)
            {
                case "box-two":
                    $("#arrow-one").show();
                    break;
                case "box-three":
                    $("#arrow-two").show();
                    break;
            }
            break;
        }
    });
});