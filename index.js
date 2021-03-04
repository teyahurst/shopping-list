
function handleCheckItem() {
$('.shopping-list').on('click', '.shopping-item-toggle', event => {

const targetItem = $(event.currentTarget).closest('li').find('.shopping-item')

targetItem.toggleClass('.shopping-item shopping-item__checked')

  
  });
};



function handleRemoveItem() {
$('.shopping-list').on('click', '.shopping-item-delete', event => {
  $(event.currentTarget).closest('li').remove()
  });
};



function handleAddItem()  {
  $('#js-shopping-list-form').submit( event => {
      event.preventDefault();

      const item = $(this).find('input[name="shopping-list-entry"]').val();
      
      $('.shopping-list').append(`<li>
      <span class="shopping-item">${item}</span>
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
$(handleCheckItem);
$(handleRemoveItem);