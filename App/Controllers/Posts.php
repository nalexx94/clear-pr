<?php

namespace App\Controllers;

use \App\Models\Post;
use \Core\View;

class Posts extends \Core\Controller
{
    public function indexAction() {
        $posts = Post::getAll();

        View::renderTemplate('Posts/index.html',[
           'posts' => $posts
        ]);
    }

    public function addNewAction() {

    }
}