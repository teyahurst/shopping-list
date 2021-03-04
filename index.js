function handleAddItem()  {
    $('#js-shopping-list-form').submit( event => {
        event.preventDefault();

        const item = $(this).find('input[name="shopping-list-entry"]').val();
        
        $('ul .shopping-list').append(`<li>
        <span class="shopping-item shopping-item__checked">${item}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)

    });
    
};
$(handleAddItem);


function handleCheckItem() {
  $('.shopping-item-toggle').on('click', event => {

  const targetItem = $(event.currentTarget).closest('li').find('.shopping-item')

  targetItem.toggleClass('.shopping-item shopping-item__checked')

    
  });

};

$(handleCheckItem)

function handleRemoveItem() {
  $('.shopping-item-delete').off('click', event => {

  })
}


