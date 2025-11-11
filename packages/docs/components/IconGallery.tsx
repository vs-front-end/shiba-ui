import React, { useState } from 'react';
import { Icon, ThemeProvider } from '@shiba-ui/browser';
import type { IconKeys } from '@shiba-ui/shared';

const allIcons: IconKeys[] = [
  'activity', 'airplay', 'alert-circle', 'alert-octagon', 'alert-triangle',
  'align-center', 'align-justify', 'align-left', 'align-right', 'anchor',
  'aperture', 'archive', 'arrow-down', 'arrow-down-circle', 'arrow-down-left',
  'arrow-down-right', 'arrow-left', 'arrow-left-circle', 'arrow-right',
  'arrow-right-circle', 'arrow-up', 'arrow-up-circle', 'arrow-up-left',
  'arrow-up-right', 'at-sign', 'award', 'bar-chart', 'bar-chart-2',
  'battery', 'battery-charging', 'bell', 'bell-off', 'bluetooth',
  'bold', 'book', 'bookmark', 'book-open', 'box', 'briefcase', 'calendar',
  'camera', 'camera-off', 'cast', 'check', 'check-circle', 'check-square',
  'chevron-down', 'chevron-left', 'chevron-right', 'chevrons-down',
  'chevrons-left', 'chevrons-right', 'chevrons-up', 'chevron-up',
  'chrome', 'circle', 'clipboard', 'clock', 'cloud', 'cloud-drizzle',
  'cloud-lightning', 'cloud-off', 'cloud-rain', 'cloud-snow', 'code',
  'codepen', 'codesandbox', 'coffee', 'columns', 'command', 'compass',
  'copy', 'corner-down-left', 'corner-down-right', 'corner-left-down',
  'corner-left-up', 'corner-right-down', 'corner-right-up',
  'corner-up-left', 'corner-up-right', 'cpu', 'credit-card', 'crop',
  'crosshair', 'database', 'delete', 'disc', 'divide', 'divide-circle',
  'divide-square', 'dollar-sign', 'download', 'download-cloud',
  'dribbble', 'droplet', 'edit', 'edit-2', 'edit-3', 'external-link',
  'eye', 'eye-off', 'facebook', 'fast-forward', 'feather', 'figma',
  'file', 'file-minus', 'file-plus', 'file-text', 'film', 'filter',
  'flag', 'folder', 'folder-minus', 'folder-plus', 'framer', 'frown',
  'gift', 'git-branch', 'git-commit', 'github', 'gitlab', 'git-merge',
  'git-pull-request', 'globe', 'grid', 'hard-drive', 'hash', 'headphones',
  'heart', 'help-circle', 'hexagon', 'home', 'image', 'inbox', 'info',
  'instagram', 'italic', 'key', 'layers', 'layout', 'life-buoy', 'link',
  'link-2', 'linkedin', 'list', 'loader', 'lock', 'log-in', 'log-out',
  'mail', 'map', 'map-pin', 'maximize', 'maximize-2', 'meh', 'menu',
  'message-circle', 'message-square', 'mic', 'mic-off', 'minimize',
  'minimize-2', 'minus', 'minus-circle', 'minus-square', 'monitor',
  'moon', 'more-horizontal', 'more-vertical', 'mouse-pointer', 'move',
  'music', 'navigation', 'navigation-2', 'octagon', 'package', 'paperclip',
  'pause', 'pause-circle', 'pen-tool', 'percent', 'phone', 'phone-call',
  'phone-forwarded', 'phone-incoming', 'phone-missed', 'phone-off',
  'phone-outgoing', 'pie-chart', 'play', 'play-circle', 'plus',
  'plus-circle', 'plus-square', 'pocket', 'power', 'printer', 'radio',
  'refresh-ccw', 'refresh-cw', 'repeat', 'rewind', 'rotate-ccw',
  'rotate-cw', 'rss', 'save', 'scissors', 'search', 'send', 'server',
  'settings', 'share', 'share-2', 'shield', 'shield-off', 'shopping-bag',
  'shopping-cart', 'shuffle', 'sidebar', 'skip-back', 'skip-forward',
  'slack', 'slash', 'sliders', 'smartphone', 'smile', 'speaker', 'square',
  'star', 'stop-circle', 'sun', 'sunrise', 'sunset', 'table', 'tablet',
  'tag', 'target', 'terminal', 'thermometer', 'thumbs-down', 'thumbs-up',
  'toggle-left', 'toggle-right', 'tool', 'trash', 'trash-2', 'trello',
  'trending-down', 'trending-up', 'triangle', 'truck', 'tv', 'twitch',
  'twitter', 'type', 'umbrella', 'underline', 'unlock', 'upload',
  'upload-cloud', 'user', 'user-check', 'user-minus', 'user-plus',
  'users', 'user-x', 'video', 'video-off', 'voicemail', 'volume',
  'volume-1', 'volume-2', 'volume-x', 'watch', 'wifi', 'wifi-off',
  'wind', 'x', 'x-circle', 'x-octagon', 'x-square', 'youtube', 'zap',
  'zap-off', 'zoom-in', 'zoom-out'
];

export function IconGallery() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredIcons = allIcons.filter(icon =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleIconClick = (iconName: string) => {
    navigator.clipboard.writeText(iconName);
    alert(`Copied: ${iconName}`);
  };

  return (
    <ThemeProvider selectedTheme="light">
      <div>
        <input
          type="text"
          placeholder="Search icons..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '24px',
            fontSize: '16px',
            border: '1px solid #ddd',
            borderRadius: '8px',
          }}
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: '16px',
          }}
        >
          {filteredIcons.map((iconName) => (
            <div
              key={iconName}
              onClick={() => handleIconClick(iconName)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '16px',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f5f5f5';
                e.currentTarget.style.borderColor = '#7F2BFF';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = '#e0e0e0';
              }}
            >
              <Icon icon={iconName} size={24} color="content" />
              <span
                style={{
                  marginTop: '8px',
                  fontSize: '12px',
                  textAlign: 'center',
                  wordBreak: 'break-word',
                }}
              >
                {iconName}
              </span>
            </div>
          ))}
        </div>
        {filteredIcons.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#999' }}>
            No icons found matching "{searchTerm}"
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

