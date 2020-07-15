updateCartBtns = document.getElementsByClassName("update-cart")

for (var i = 0; i < updateCartBtns.length; i++) {
    updateCartBtns[i].addEventListener("click", function () {
        var productId = this.dataset.product
        var action = this.dataset.action

        if (user == 'AnonymousUser') {
            console.log("User not logged in")
        } else {
            updateUserOrder(productId, action)
        }
    })
}

function updateUserOrder(productId, action) {
    var url = '/update_item/'

    fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: JSON.stringify({
                'productId': productId,
                'action': action
            })
        })
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)
            location.reload()
        })
}