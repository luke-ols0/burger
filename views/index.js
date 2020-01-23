// creates function to render index
const render = function () {

	return `

	<div class=container>
    <div class="row">
        <div class="col-md-12">
            <img src="/assets/img/burger.png" class="center" id="burger-img" alt="burger" width="450" height="400">
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <h1 class="text-center" id="burger-header">Eat-Da-Burger!</h1>
        </div>
    </div>
    </body>

    <div class="row">
        <div class="col-md-3">
        </div>

        <div class="col-md-6">
            <form class="create-update-form" action="/" method="POST">
                <div class="form-group">
                    <input class="burger-text form-control" id="focusedInput" type="text" name="burger_name">
                </div>

                <div class="form-group">
                    <button type="submit" class="burger-btn btn btn-warning center-block">Submit</button>
                </div>
            </form>
        </div>

        <div class="col-md-3">
        </div>
    </div>

    <div class="row">
        <div class="col-md-12">
            <p class="burger-text text-center">Enter a burger you want to eat, then click the "Submit" button.</p>
        </div>
    </div>

`

};

// exports render function with index.html
exports.render = render;
