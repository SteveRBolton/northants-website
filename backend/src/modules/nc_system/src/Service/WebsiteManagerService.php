<?php

namespace Drupal\nc_system\Service;

use Drupal\Core\Config\ConfigFactory;

/**
 * Class WebsiteManagerService
 *
 * @package Drupal\nc_cloudflare_purge\Service
 */
class WebsiteManagerService {

  /**
   * @var string
   */
  protected string $councilName;

  /**
   * @var string
   */
  protected string $backgroundColor;

  /**
   * @var string
   */
  protected string $cssLibrary;

  /**
   * @var string
   */
  protected string $ckeditorStyleSheet;

  /**
   * @var string
   */
  protected string $host;


  public function __construct() {
    if (isset($_ENV['NEXT_PUBLIC_WEBSITE'])) {
      switch ($_ENV['NEXT_PUBLIC_WEBSITE']) {
        case 'west':
          $this->backgroundColor = '#386193';
          $this->cssLibrary = 'nc_seven/nc-seven-west-admin-css';
          $this->ckeditorStyleSheet = '/css/ckeditor/colorscheme/west.css';
          $this->councilName = 'West Northamptonshire Council';
          $this->host = (isset($_ENV['NEXT_PUBLIC_BASE_URL']) ? rtrim($_ENV['NEXT_PUBLIC_BASE_URL'], '/') : 'https://beta.westnorthants.gov.uk');
          break;

        case 'north':
          $this->backgroundColor = '#05873a';
          $this->cssLibrary = 'nc_seven/nc-seven-north-admin-css';
          $this->ckeditorStyleSheet = '/css/ckeditor/colorscheme/north.css';
          $this->councilName = 'North Northamptonshire Council';
          $this->host = (isset($_ENV['NEXT_PUBLIC_BASE_URL']) ? rtrim($_ENV['NEXT_PUBLIC_BASE_URL'], '/') : 'https://beta.northnorthants.gov.uk');
          break;

        default:
          break;
      }
    }
  }

  /**
   * Returns the council's background color for use in branding the backend.
   */
  public function getBackgroundColor(): string {
    return $this->backgroundColor;
  }

  /**
   * Returns the council's name.
   */
  public function getCouncilName(): string {
    return $this->councilName;
  }

  /**
   * Returns the website frontend host.
   */
  public function getHost(): string {
    return $this->host;
  }

  /**
   * Returns the council's ckeditor library branding the backend.
   */
  public function getCssLibrary(): string {
    return $this->cssLibrary;
  }

  /**
   * Returns the council's ckeditor branding the backend.
   */
  public function getCkEditorStyleSheet(): string {
    return $this->ckeditorStyleSheet;
  }

}
