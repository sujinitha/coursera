    var flippedCards = [];
    var matchedPairs = 0;

    function flipCard(card) {
        if (flippedCards.length < 2 && !$(card).hasClass('is-flipped')) {
            $(card).toggleClass('is-flipped');
            flippedCards.push(card);

            if (flippedCards.length === 2) {
                var value1 = $(flippedCards[0]).find('.card-back').text();
                var value2 = $(flippedCards[1]).find('.card-back').text();

                if (value1 === value2) {
                    setTimeout(function () {
                        $(flippedCards[0]).addClass('matched');
                        $(flippedCards[1]).addClass('matched');
                        flippedCards = [];
                        matchedPairs++;

                        alert('Congratulations! You found a matching pair!');

                        if (matchedPairs === 3) {
                            resetGame();
                        }
                    }, 500);
                } else {
                    setTimeout(function () {
                        $(flippedCards[0]).toggleClass('is-flipped');
                        $(flippedCards[1]).toggleClass('is-flipped');
                        flippedCards = [];
                    }, 1000);
                }
            }
        }
    }

    function resetGame() {
        $('.card').removeClass('is-flipped');
        $('.card').removeClass('matched');
        flippedCards = [];
        matchedPairs = 0;
    }