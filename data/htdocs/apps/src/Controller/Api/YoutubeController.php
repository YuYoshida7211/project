<?php
namespace App\Controller\Api;

use Cake\Controller\Controller;

class YoutubeController extends Controller
{
    public function initialize(): void
    {
        parent::initialize();
        $this->loadComponent('RequestHandler');
    }

    public function index($mode = null) {
        $get_api_url="https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=jp&key=AIzaSyAAvAM4OkSNFfbxMVaXqn9awzKhikQ9ON0";
        $movies = file_get_contents($get_api_url);
        $this->set([
            'movies' => $movies,
            '_serialize' => ['movies']
        ]);
    }
}
