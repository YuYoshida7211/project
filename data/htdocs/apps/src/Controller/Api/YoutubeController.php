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
        // 人気動画を10件取得する
        $get_api_url="https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=10&regionCode=jp&key=AIzaSyAAvAM4OkSNFfbxMVaXqn9awzKhikQ9ON0";
        $videos = file_get_contents($get_api_url);
        $this->set([
            'movies' => $videos,
            '_serialize' => ['movies']
        ]);

        // ApiShellにjsonを返す
        return $videos;

    }
}
