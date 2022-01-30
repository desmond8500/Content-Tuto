<?php $note =  htmlspecialchars($_GET['note']);
include "../../../Sources/Modules/Markdown/PHP Markdown Extra 1.2.8/markdown.php"; ?>

<div class="modal-header" >
  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
    <span aria-hidden="true">&times;</span>
    <span class="sr-only">Close</span>
  </button>
  <h4 class="modal-title"><?php echo $note ?></h4>
</div>
<div class="modal-body">
  <form action="">
    <textarea name="texte" rows="8" cols="70"><?php
    $contenu = file_get_contents($note);
    echo ($contenu);
    ?>

    </textarea>
  </form>
</div>
<div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  <button type="button" class="btn btn-primary">Save changes</button>
</div>
