'use strict';
/* ============================================================
   CompTIA A+ Study Tool — Data Layer
   Built in 4 steps:
     Step 1 (this file): DOMAINS + Core 1 flashcards
     Step 2: Core 2 flashcards
     Step 3: Quiz questions
     Step 4: Glossary + Cheat Sheets
   ============================================================ */

// ═══════════════════════════════════════════════════════════════════════════
// DOMAINS  (complete — both exams)
// ═══════════════════════════════════════════════════════════════════════════
const DOMAINS = {
  core1: {
    mobile:             { name: 'Mobile Devices',                   weight: '15%' },
    networking:         { name: 'Networking',                       weight: '20%' },
    hardware:           { name: 'Hardware',                         weight: '27%' },
    virtualization:     { name: 'Virtualization & Cloud Computing', weight: '12%' },
    'hw-troubleshooting': { name: 'Hardware & Network Troubleshooting', weight: '26%' }
  },
  core2: {
    os:                   { name: 'Operating Systems',         weight: '31%' },
    security:             { name: 'Security',                  weight: '25%' },
    'sw-troubleshooting': { name: 'Software Troubleshooting',  weight: '22%' },
    operational:          { name: 'Operational Procedures',    weight: '22%' }
  }
};

// ═══════════════════════════════════════════════════════════════════════════
// FLASHCARDS
// ═══════════════════════════════════════════════════════════════════════════
const FLASHCARDS = [

  // ─────────────────────────────────────────────────────────────────────────
  // CORE 1 — DOMAIN 1: MOBILE DEVICES
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 1, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is a digitizer in a mobile device?',
    back: 'A touch-sensitive layer that converts finger or stylus contact into digital coordinates. Capacitive digitizers (most phones/tablets) detect the electrical charge of a fingertip; resistive digitizers respond to pressure.'
  },
  {
    id: 2, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What does NFC stand for and what is its range?',
    back: 'Near Field Communication. Maximum range ~10 cm (4 inches). Operates at 13.56 MHz. Used for contactless payments (Apple Pay, Google Pay), transit cards, and pairing devices.'
  },
  {
    id: 3, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What does IMEI stand for and why does it matter?',
    back: 'International Mobile Equipment Identity. A unique 15-digit number that identifies a specific physical device. Carriers can blacklist a stolen device\'s IMEI to prevent it from connecting to cellular networks.'
  },
  {
    id: 4, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is MDM and what can it do?',
    back: 'Mobile Device Management. Software that allows IT admins to remotely: enroll devices, enforce passcode/encryption policies, push app configurations, locate or remotely wipe lost/stolen devices, and manage corporate app catalogs.'
  },
  {
    id: 5, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What type of RAM form factor is used in laptops?',
    back: 'SO-DIMM (Small Outline Dual Inline Memory Module). About half the length of a desktop DIMM. DDR4 SO-DIMM has 260 pins; DDR5 SO-DIMM also 262 pins but physically incompatible with DDR4 slots.'
  },
  {
    id: 6, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the function of an accelerometer in a mobile device?',
    back: 'Detects linear acceleration and orientation relative to gravity. Used for: screen auto-rotate, step counting in fitness apps, tilt-based game controls, and detecting if a device was dropped.'
  },
  {
    id: 7, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is a gyroscope sensor used for in a smartphone?',
    back: 'Detects rotational movement (angular velocity) around three axes. Used for: more precise gaming/AR orientation, image stabilization, compass heading, and VR headset orientation tracking. Works alongside the accelerometer.'
  },
  {
    id: 8, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is the difference between a soft reset and a hard reset on a mobile device?',
    back: 'Soft reset: restarts the OS without erasing data (like rebooting). Hard reset (factory reset): wipes all user data, apps, and settings, restoring the device to factory defaults. Used as a last resort for serious software issues.'
  },
  {
    id: 9, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What are the two dominant mobile operating systems?',
    back: 'Android (Google) — open source, runs on many manufacturers\' hardware, highly customizable. iOS (Apple) — closed ecosystem, runs only on Apple hardware, tightly controlled, consistent experience.'
  },
  {
    id: 10, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What connector did Apple use before USB-C on iPhones?',
    back: 'Lightning connector (introduced iPhone 5, 2012). 8-pin, reversible. Replaced the 30-pin dock connector. Supports USB 2.0 speeds (480 Mbps). Replaced by USB-C starting with iPhone 15 (2023) due to EU regulations.'
  },
  {
    id: 11, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the purpose of a mobile hotspot?',
    back: 'Shares a smartphone\'s cellular data connection as a Wi-Fi network for other devices (laptops, tablets). The phone acts as a wireless router. Uses the device\'s cellular data plan; may require carrier plan add-on.'
  },
  {
    id: 12, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the difference between airplane mode and turning off Wi-Fi only?',
    back: 'Airplane mode disables ALL wireless radios simultaneously: cellular, Wi-Fi, Bluetooth, GPS, and NFC. Required during flight. Turning off Wi-Fi only disables Wi-Fi while leaving cellular and Bluetooth active.'
  },
  {
    id: 13, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What causes a mobile device screen to be unresponsive to touch?',
    back: 'Cracked or damaged digitizer, water damage to touch layer, screen protector interference (thick or poorly fitted), software crash (try soft reset), dirty screen, or in rare cases a hardware failure requiring screen replacement.'
  },
  {
    id: 14, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is Bluetooth\'s IEEE standard and typical range?',
    back: 'IEEE 802.15.1. Typical range: Class 2 devices (most phones) ~10 meters (33 ft) in open space. Bluetooth 5.0 extends theoretical range up to 40 m indoors. Operates in the 2.4 GHz ISM band.'
  },
  {
    id: 15, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the purpose of an OTA update on a mobile device?',
    back: 'Over-The-Air update. Delivers firmware, OS patches, or app updates wirelessly without connecting to a computer. Requires sufficient battery (usually >50%) and adequate storage. iOS and Android both use OTA for system updates.'
  },
  {
    id: 16, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is jailbreaking (iOS) or rooting (Android)?',
    back: 'Removes manufacturer/carrier restrictions to gain full OS-level access. Allows installing unsigned apps and deep customizations. Risks: voids warranty, disables security features (Secure Enclave/Knox), may brick the device, enables malware.'
  },
  {
    id: 17, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is GPS and how does it work on a mobile device?',
    back: 'Global Positioning System. Device receives signals from multiple satellites (minimum 3 for 2D fix, 4 for 3D). Calculates position via trilateration. Assisted-GPS (A-GPS) uses cellular/Wi-Fi data to speed up the initial fix.'
  },
  {
    id: 18, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is Qi wireless charging?',
    back: 'Inductive wireless charging standard developed by the Wireless Power Consortium. Uses electromagnetic induction between coils. Phone placed on charging pad. Standard Qi: up to 5W. Qi2 and proprietary implementations (MagSafe, etc.) support 15W+.'
  },
  {
    id: 19, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the difference between OLED and LCD in a mobile display?',
    back: 'OLED: each pixel emits its own light — true blacks (pixel off = black), infinite contrast, thinner panels, can be flexible, risk of burn-in. LCD: uses a constant backlight behind liquid crystal layer — always-on backlight causes glow, thicker.'
  },
  {
    id: 20, exam: 'core1', domain: 'mobile', difficulty: 'hard',
    front: 'What is an eSIM and how does it differ from a physical SIM?',
    back: 'Embedded SIM — a programmable chip soldered into the device. Can be remotely provisioned with carrier credentials without swapping physical cards. Supports multiple carrier profiles stored simultaneously. Becoming standard on newer iPhones and high-end Android.'
  },
  {
    id: 21, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What are common causes of rapid battery drain on a smartphone?',
    back: 'Screen at high brightness, background app activity, poor cellular signal (radio works harder), aging battery (reduced capacity), GPS/location services running constantly, push email/sync, and battery-intensive apps like navigation or games.'
  },
  {
    id: 22, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What does it mean when a phone shows "SIM not provisioned"?',
    back: 'The SIM card is not activated with the carrier. Common causes: new SIM not yet activated, SIM deactivated by carrier, account issue, or SIM card damaged. Solution: contact carrier to activate, or try reseating the SIM.'
  },
  {
    id: 23, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the difference between 4G LTE and 5G?',
    back: '5G: peak speeds up to 20 Gbps, sub-1ms latency, greater capacity for dense environments, three frequency bands (sub-6 GHz and mmWave). 4G LTE: typical speeds 10–100 Mbps. 5G mmWave is very fast but short range; sub-6 GHz is wider coverage.'
  },
  {
    id: 24, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is mobile device tethering via USB?',
    back: 'Connecting a smartphone to a computer via USB cable and sharing the phone\'s cellular internet connection. The computer sees the phone as a network adapter. Generally faster and more stable than Wi-Fi hotspot; does not drain phone battery.'
  },
  {
    id: 25, exam: 'core1', domain: 'mobile', difficulty: 'hard',
    front: 'What is Samsung Knox and what does it provide?',
    back: 'Samsung\'s hardware-backed security platform built into Galaxy devices. Provides a secure container for work apps/data separate from personal data, hardware key storage, real-time kernel protection, and remote management integration for MDM solutions.'
  },
  {
    id: 26, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What causes a laptop display to appear dim but still visible?',
    back: 'The backlight is failing. On older CCFL-backlit laptops, the CCFL tube or inverter board is failing. On LED-backlit laptops, the LED driver circuit or LED strip is failing. The LCD panel and GPU output are still functioning normally.'
  },
  {
    id: 27, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is an IR blaster on a mobile device?',
    back: 'Infrared transmitter that allows the phone to act as a TV/AV remote control. Controlled via apps that simulate remote controls for specific devices. Common on many Android phones (Samsung, Xiaomi), absent from iPhones.'
  },
  {
    id: 28, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the purpose of a laptop docking station?',
    back: 'Expands a laptop\'s connectivity at a desk. Provides additional ports: USB-A/C, DisplayPort, HDMI, Ethernet, audio, SD card. Connects via USB-C/Thunderbolt. Allows single-cable connection that powers the laptop and connects peripherals.'
  },
  {
    id: 29, exam: 'core1', domain: 'mobile', difficulty: 'hard',
    front: 'What wireless technologies operate at 60 GHz?',
    back: 'WiGig (802.11ad/ay). Extremely high speed (up to 8 Gbps on 802.11ad) but very short range (meters) and poor wall penetration. Used for cable-replacement in conference rooms and VR applications. Also used in 5G mmWave.'
  },
  {
    id: 30, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is screen mirroring and name two technologies that enable it?',
    back: 'Wirelessly displaying a mobile device\'s screen on a TV or external display. Technologies: AirPlay (Apple — streams to Apple TV or AirPlay-compatible TVs), Miracast (Wi-Fi Direct standard, used by many Android devices and Windows), Chromecast.'
  },
  {
    id: 31, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the purpose of a barometric pressure sensor in a smartphone?',
    back: 'Measures atmospheric pressure to determine altitude. Improves GPS accuracy (adds altitude dimension), helps fitness apps track floor counts and elevation gain, and assists with weather apps. More accurate than GPS-based altitude calculations.'
  },
  {
    id: 32, exam: 'core1', domain: 'mobile', difficulty: 'hard',
    front: 'What is the difference between MicroSD, MicroSDHC, and MicroSDXC?',
    back: 'MicroSD: original standard, max 2 GB, FAT16. MicroSDHC (High Capacity): 2 GB–32 GB, FAT32. MicroSDXC (Extended Capacity): 32 GB–2 TB, exFAT. The device must support the card class to use it; backward compatibility is common but not guaranteed.'
  },
  {
    id: 33, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is a common fix for a frozen or unresponsive smartphone?',
    back: 'Perform a forced restart: on iPhone (newer) press Volume Up, Volume Down, then hold Side button; on Android, hold Power + Volume Down for 10 seconds (varies by device). This restarts the OS without losing data.'
  },
  {
    id: 34, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What does "carrier locked" mean on a smartphone?',
    back: 'The device is configured to only work with one specific carrier\'s SIM card. Prevents using competing carriers\' SIMs. Carriers unlock phones after contract completion or upon request. Unlocked phones work with any compatible carrier.'
  },
  {
    id: 35, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is VPN on a mobile device used for?',
    back: 'Creates an encrypted tunnel for all network traffic. Use cases: protecting data on public Wi-Fi, accessing corporate resources remotely, bypassing geographic content restrictions. MDM systems often push VPN configurations to corporate devices.'
  },
  {
    id: 36, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the Apple Lightning connector\'s data transfer speed?',
    back: 'USB 2.0 speeds: 480 Mbps maximum. Despite being physically small and reversible, Lightning only supports USB 2.0 bandwidth. For faster transfers, a Lightning to USB 3 Camera Adapter is required which can achieve USB 3.0 speeds.'
  },
  {
    id: 37, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is a mobile device\'s "Recovery Mode"?',
    back: 'A special boot environment allowing firmware restoration via computer using iTunes/Finder (iOS) or Android recovery tools. Used when the device won\'t start normally, after failed updates, or to perform factory reset when regular boot is impossible.'
  },
  {
    id: 38, exam: 'core1', domain: 'mobile', difficulty: 'hard',
    front: 'What USB-C features does USB Power Delivery (USB-PD) enable on phones?',
    back: 'USB-PD allows negotiated charging power up to 100W over USB-C. Phones can receive higher wattage charging than standard 5V/2A (10W). Example: iPhone 15 supports up to 27W PD. The charger and device negotiate the safe maximum power level.'
  },
  {
    id: 39, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is the purpose of a smartwatch pairing with a smartphone?',
    back: 'Extends smartphone functionality to the wrist: notifications, calls, messages, health monitoring. Communicates via Bluetooth (primary) and sometimes Wi-Fi. Requires a companion app on the phone. Examples: Apple Watch (iPhone only), Galaxy Watch (Android/Samsung).'
  },
  {
    id: 40, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is MDM\'s role in BYOD (Bring Your Own Device) environments?',
    back: 'MDM enables containerization — creating a separate, managed work profile on personal devices. Corporate data in the work container can be remotely wiped without affecting personal data. Enforces minimum security policies (PIN, encryption) on personal devices accessing corporate resources.'
  },
  {
    id: 41, exam: 'core1', domain: 'mobile', difficulty: 'hard',
    front: 'What is a mobile device\'s baseband processor?',
    back: 'A separate processor (often called the modem chip) that handles all cellular radio communications: voice calls, SMS, LTE/5G data. It runs its own firmware independently of the main application processor. Examples: Qualcomm Snapdragon X series modems.'
  },
  {
    id: 42, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What troubleshooting steps should you take for a phone that won\'t charge?',
    back: '1) Try a different cable; 2) Try a different charger/adapter; 3) Clean the charging port (lint buildup is common); 4) Restart device; 5) Try wireless charging if supported; 6) Test with a USB current meter; 7) Battery or charging IC failure if all else fails.'
  },
  {
    id: 43, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is the difference between iOS and Android app stores?',
    back: 'iOS: Apps must be downloaded from the Apple App Store (strict review process, no sideloading by default). Android: Primary store is Google Play; also allows sideloading (installing APK files from unknown sources), enabling third-party app stores.'
  },
  {
    id: 44, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    front: 'What is display calibration on a mobile device?',
    back: 'Adjusting the touchscreen digitizer so touch input aligns precisely with displayed elements. Usually done automatically. If touch response is off-target, a calibration reset or screen replacement may be needed. Also refers to color profile adjustment for accurate color reproduction.'
  },
  {
    id: 45, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    front: 'What is two-factor authentication (2FA) on a mobile device?',
    back: 'Requires a second verification factor beyond a password. On mobile devices: SMS code, authenticator app (Google Authenticator, Authy), biometric (Face ID, fingerprint), or hardware token. Significantly reduces account compromise risk even if password is stolen.'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CORE 1 — DOMAIN 2: NETWORKING
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 101, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What port does HTTP use and what is it?',
    back: 'Port 80, TCP. HyperText Transfer Protocol — the foundation of web data communication. Traffic is unencrypted and visible in plain text. Websites still using HTTP show "Not Secure" in browsers.'
  },
  {
    id: 102, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What port does HTTPS use?',
    back: 'Port 443, TCP. HTTP Secure — encrypts traffic using TLS (Transport Layer Security). Protects data in transit from eavesdropping and tampering. Required for any site handling passwords or personal data.'
  },
  {
    id: 103, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What port does SSH use and what replaced it on the network?',
    back: 'Port 22, TCP. Secure Shell — provides encrypted remote terminal access to servers and network devices. Replaced Telnet (port 23) which sent all data including passwords in plain text.'
  },
  {
    id: 104, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What port does Telnet use and why is it deprecated?',
    back: 'Port 23, TCP. Provides remote terminal access but transmits ALL data in plain text — including usernames and passwords. Replaced by SSH. Should never be used on production networks. Still occasionally seen on legacy equipment.'
  },
  {
    id: 105, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What two ports does FTP use and what does each do?',
    back: 'Port 20 (TCP): data transfer channel — file content flows here. Port 21 (TCP): control channel — commands and responses (USER, PASS, LIST, RETR). FTP sends credentials in plain text; SFTP (port 22) or FTPS (port 990) are secure alternatives.'
  },
  {
    id: 106, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What port does SMTP use and what does it do?',
    back: 'Port 25, TCP. Simple Mail Transfer Protocol — used by mail servers to send email to each other (server-to-server relay). Port 587 is used for client-to-server email submission (with authentication). Port 465 is SMTPS (legacy).'
  },
  {
    id: 107, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What port does POP3 use and how does it handle email?',
    back: 'Port 110, TCP (995 for POP3S). Post Office Protocol v3 — downloads email from server to client and typically deletes it from the server. Email is then only on the local device. Simple but not ideal for multi-device access. IMAP is preferred today.'
  },
  {
    id: 108, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What port does IMAP use and how does it differ from POP3?',
    back: 'Port 143, TCP (993 for IMAPS). Internet Message Access Protocol — email stays on the server and is synchronized to all devices. Read/delete on one device reflects on all others. Preferred for multi-device email access. POP3 downloads and removes from server.'
  },
  {
    id: 109, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What port does DNS use and what protocol(s)?',
    back: 'Port 53, both UDP and TCP. UDP for standard queries (faster, no connection overhead). TCP for zone transfers between DNS servers and for responses larger than 512 bytes. DNS translates domain names (google.com) to IP addresses (142.250.80.46).'
  },
  {
    id: 110, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What ports does DHCP use?',
    back: 'Port 67 UDP (server) and Port 68 UDP (client). Server listens on 67 for requests. Client sends from port 68. DORA process: Discover → Offer → Request → Acknowledge. Assigns IP address, subnet mask, gateway, DNS servers, and lease time.'
  },
  {
    id: 111, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What port does TFTP use and how does it differ from FTP?',
    back: 'Port 69, UDP. Trivial File Transfer Protocol — extremely simple, no authentication, no directory listing, uses UDP for speed. Used to send firmware images to network devices (PXE boot, router/switch firmware), not for general file transfer.'
  },
  {
    id: 112, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What port does SNMP use and what is it for?',
    back: 'Port 161 UDP (queries), Port 162 UDP (traps). Simple Network Management Protocol — monitors and manages network devices (routers, switches, printers, servers). Uses MIBs (Management Information Bases) to define data. SNMPv3 adds encryption and authentication.'
  },
  {
    id: 113, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What port does LDAP use and what is it used for?',
    back: 'Port 389, TCP. Lightweight Directory Access Protocol — queries and modifies directory services like Microsoft Active Directory. Stores user accounts, computer objects, groups, and policies. LDAPS (port 636) adds TLS encryption. Used for authentication on corporate networks.'
  },
  {
    id: 114, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What port does RDP use?',
    back: 'Port 3389, TCP. Remote Desktop Protocol — Microsoft\'s protocol for graphical remote desktop access to Windows machines. Encrypts the session. Common attack target; best practice is to change the port, use VPN, or require MFA to protect RDP access.'
  },
  {
    id: 115, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What port does SMB use and what does it do?',
    back: 'Port 445, TCP. Server Message Block — Windows file sharing and printer sharing protocol. Used by Windows Explorer for network drives. EternalBlue exploit (WannaCry) targeted SMB. SMBv1 is extremely vulnerable and should be disabled.'
  },
  {
    id: 116, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What port does NTP use and why does it matter?',
    back: 'Port 123, UDP. Network Time Protocol — synchronizes clocks across network devices. Critical for Kerberos authentication (Active Directory fails if clocks are off by more than 5 minutes), logging accuracy, SSL certificate validation, and many security functions.'
  },
  {
    id: 117, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What port does SIP use and what is it for?',
    back: 'Port 5060 (TCP/UDP). Session Initiation Protocol — sets up, maintains, and terminates VoIP calls and multimedia sessions. Works with RTP (Real-time Transport Protocol) which carries the actual voice/video data on dynamic UDP ports.'
  },
  {
    id: 118, exam: 'core1', domain: 'networking', difficulty: 'hard',
    front: 'What ports do NetBIOS Name Service and NetBIOS Session use?',
    back: 'NetBIOS Name Service: Port 137 UDP — resolves NetBIOS names to IP addresses (pre-DNS Windows name resolution). NetBIOS Session Service: Port 139 TCP — carries SMB traffic on older Windows systems. Port 445 (direct SMB) has replaced 139 on modern systems.'
  },
  {
    id: 119, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What port does LDAPS use and what does it add?',
    back: 'Port 636, TCP. LDAP over SSL/TLS — encrypts the directory communication that LDAP (port 389) sends in plain text. Required for secure directory queries in environments where LDAP traffic crosses untrusted networks.'
  },
  {
    id: 120, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What are the speed, frequency, and modulation of 802.11a?',
    back: 'Frequency: 5 GHz only. Max speed: 54 Mbps. Modulation: OFDM (Orthogonal Frequency Division Multiplexing). Released 1999. Shorter range than 2.4 GHz due to higher frequency. Not backward compatible with 802.11b/g.'
  },
  {
    id: 121, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What are the characteristics of 802.11b?',
    back: 'Frequency: 2.4 GHz. Max speed: 11 Mbps. Modulation: DSSS (Direct Sequence Spread Spectrum). Released 1999. Widely adopted but slow. Only 3 non-overlapping channels (1, 6, 11) in the US. Highly susceptible to interference from microwaves and cordless phones.'
  },
  {
    id: 122, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What are the characteristics of 802.11g?',
    back: 'Frequency: 2.4 GHz. Max speed: 54 Mbps. Modulation: OFDM. Released 2003. Backward compatible with 802.11b (but slows to 11 Mbps when b devices connect). Same interference issues as 802.11b. 3 non-overlapping channels.'
  },
  {
    id: 123, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What are the key features of 802.11n (Wi-Fi 4)?',
    back: 'Frequency: 2.4 GHz and 5 GHz (dual-band). Max speed: 600 Mbps theoretical. Key innovation: MIMO (Multiple Input Multiple Output) — uses multiple antennas to send/receive simultaneously. 40 MHz channel bonding. Released 2009. Backward compatible with a/b/g.'
  },
  {
    id: 124, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What are the key features of 802.11ac (Wi-Fi 5)?',
    back: 'Frequency: 5 GHz only (no 2.4 GHz). Max speed: ~3.5 Gbps theoretical (Wave 2). Key innovations: MU-MIMO (Multi-User MIMO — serves multiple clients simultaneously), beamforming (focuses signal), 80/160 MHz channel widths. Released 2013.'
  },
  {
    id: 125, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What are the key features of 802.11ax (Wi-Fi 6 / Wi-Fi 6E)?',
    back: 'Frequency: 2.4, 5, and 6 GHz (Wi-Fi 6E adds 6 GHz band). Max speed: ~9.6 Gbps theoretical. Key innovations: OFDMA (serves multiple clients per transmission), Target Wake Time (TWT — extends IoT battery life), BSS Coloring (reduces interference in dense environments). Released 2019.'
  },
  {
    id: 126, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is the difference between 2.4 GHz and 5 GHz Wi-Fi bands?',
    back: '2.4 GHz: longer range, better wall/obstacle penetration, only 3 non-overlapping channels, more interference (Bluetooth, microwaves, neighbors). 5 GHz: shorter range, less wall penetration, 23+ non-overlapping channels, much less interference, significantly faster.'
  },
  {
    id: 127, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is WPA3 and what makes it better than WPA2?',
    back: 'Wi-Fi Protected Access 3 — latest wireless security standard. Uses SAE (Simultaneous Authentication of Equals) replacing PSK (Pre-Shared Key). Protects against offline dictionary attacks (guessing passwords from captured handshakes). Also adds Forward Secrecy and improved public Wi-Fi encryption (OWE).'
  },
  {
    id: 128, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What is Cat5e cable and its specifications?',
    back: 'Enhanced Category 5. Max speed: 1 Gbps (1000Base-T). Max distance: 100 meters. Improved crosstalk specs over Cat5. UTP (unshielded twisted pair). Minimum standard for Gigabit Ethernet. Uses RJ-45 connectors.'
  },
  {
    id: 129, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What is Cat6 cable and what speeds does it support?',
    back: 'Category 6. Supports 10 Gbps at distances up to 55 meters; 1 Gbps at 100 meters. Tighter twisting and a plastic separator (spline) inside the cable reduce crosstalk. Backward compatible with Cat5e. Uses RJ-45 connectors.'
  },
  {
    id: 130, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is Cat6a cable and how does it improve on Cat6?',
    back: 'Augmented Category 6. Supports 10 Gbps at full 100 meters (vs Cat6\'s 55m limit). Available in STP (shielded) and UTP variants. Thicker and stiffer than Cat6. Required for 10GBASE-T at full distance. Uses RJ-45 connectors.'
  },
  {
    id: 131, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is the difference between multimode and single-mode fiber?',
    back: 'Multimode: larger core (50 or 62.5 μm), uses LED or VCSEL light sources, multiple light paths, shorter distances (up to ~2 km), less expensive. Single-mode: small core (9 μm), uses laser, single light path, very long distances (up to 100+ km), more expensive.'
  },
  {
    id: 132, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is the difference between plenum and riser cable ratings?',
    back: 'Plenum-rated: fire-retardant, low-smoke, low-toxicity jacket; required in air-handling spaces (dropped ceilings and raised floors where air circulates). Riser-rated: for vertical runs between floors in non-plenum spaces. Riser cable CANNOT substitute for plenum cable. Plenum can always substitute for riser.'
  },
  {
    id: 133, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What is an RJ-45 connector?',
    back: '8-pin 8-conductor (8P8C) modular connector used for Ethernet. Terminates UTP/STP network cable (Cat5e, Cat6, Cat6a). Pins are arranged in a T568A or T568B wiring standard. Maximum segment length with copper cable: 100 meters.'
  },
  {
    id: 134, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What is an RJ-11 connector and where is it used?',
    back: '6-position 2-conductor (6P2C) modular connector for telephone and DSL connections. Smaller than RJ-45. Carries analog voice or DSL internet signal. Standard in North America for landline phone jacks and DSL modems. Cannot fit in an RJ-45 port.'
  },
  {
    id: 135, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is an LC fiber connector?',
    back: 'Lucent Connector (also Local Connector). Small form-factor fiber connector with a push-pull latch mechanism. Half the size of SC connector. Most common in modern data centers, switches with SFP ports, and enterprise equipment. Available for both single-mode and multimode.'
  },
  {
    id: 136, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is an SC fiber connector?',
    back: 'Subscriber Connector (or Standard Connector). Square-bodied, push-pull latching connector. Larger than LC. Commonly used in single-mode deployments, cable TV, and some enterprise networking. Click-in/pull-out mechanism. Often found in duplex (SC-SC) patch cables.'
  },
  {
    id: 137, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is an ST fiber connector?',
    back: 'Straight Tip connector. Round barrel with a bayonet-style twist-to-lock mechanism (like a BNC connector). Older design, commonly used in multimode campus and building networks. Less common in new installations but still found in many legacy systems.'
  },
  {
    id: 138, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is the difference between TCP and UDP?',
    back: 'TCP (Transmission Control Protocol): connection-oriented (3-way handshake), guaranteed delivery, error checking, ordered packets, flow control. Slower but reliable. Used for HTTP, FTP, SSH. UDP (User Datagram Protocol): connectionless, no guarantee, no ordering, low overhead, fast. Used for DNS, DHCP, VoIP, streaming, gaming.'
  },
  {
    id: 139, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What is a default gateway and what is its role?',
    back: 'The IP address of the router interface on the local network. When a device needs to send traffic to a different network (including the internet), it sends the packets to the default gateway. Typically ends in .1 (e.g., 192.168.1.1). If missing, device can only communicate on local subnet.'
  },
  {
    id: 140, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is DHCP and what four items does it assign?',
    back: 'Dynamic Host Configuration Protocol. Automatically assigns network configuration to devices. Four key assignments: (1) IP address, (2) Subnet mask, (3) Default gateway, (4) DNS server address. Also provides lease time, domain name, and other options. Eliminates manual IP configuration.'
  },
  {
    id: 141, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is a MAC address and what format is it?',
    back: '48-bit (6-byte) hardware address burned into a NIC. Written as six pairs of hex digits: XX:XX:XX:XX:XX:XX. First 3 bytes = OUI (Organizationally Unique Identifier) identifying the manufacturer. Last 3 bytes = unique device ID. Used at Layer 2 (Data Link) for local network communication.'
  },
  {
    id: 142, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is NAT (Network Address Translation)?',
    back: 'Allows multiple devices on a private network to share a single public IP address for internet access. The router translates private IPs (192.168.x.x, 10.x.x.x, 172.16-31.x.x) to the public IP for outbound traffic and back for inbound. Essential given IPv4 address exhaustion.'
  },
  {
    id: 143, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is a VLAN?',
    back: 'Virtual Local Area Network. Logically segments a physical network switch into multiple isolated broadcast domains without requiring separate physical switches. Devices on different VLANs cannot communicate without routing (Layer 3). Improves security, performance, and network management. Trunk ports carry multiple VLANs.'
  },
  {
    id: 144, exam: 'core1', domain: 'networking', difficulty: 'easy',
    front: 'What are the three private IPv4 address ranges?',
    back: 'Class A: 10.0.0.0 – 10.255.255.255 (/8)\nClass B: 172.16.0.0 – 172.31.255.255 (/12)\nClass C: 192.168.0.0 – 192.168.255.255 (/16)\nThese are not routed on the public internet. Used internally with NAT for internet access.'
  },
  {
    id: 145, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What does subnet mask /24 (255.255.255.0) mean?',
    back: '24 bits for the network portion, 8 bits for hosts. Provides 256 addresses (254 usable — subtract network and broadcast addresses). Example: 192.168.1.0/24 gives hosts 192.168.1.1 through 192.168.1.254. /24 is the most common subnet for small networks.'
  },
  {
    id: 146, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is the APIPA address range and when is it assigned?',
    back: '169.254.0.1 – 169.254.255.254. Automatically assigned by Windows when DHCP server is unreachable. Allows limited local communication only (no internet access). Seeing a 169.254.x.x address indicates a DHCP failure — check DHCP server, network cable, and switch port.'
  },
  {
    id: 147, exam: 'core1', domain: 'networking', difficulty: 'hard',
    front: 'What is the difference between a hub, switch, and router?',
    back: 'Hub (Layer 1): broadcasts all traffic to all ports — creates collisions, inefficient. Switch (Layer 2): learns MAC addresses, forwards frames only to the correct port — creates separate collision domains per port. Router (Layer 3): connects different networks, routes packets based on IP addresses, separates broadcast domains.'
  },
  {
    id: 148, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is a wireless access point (WAP) vs a wireless router?',
    back: 'WAP: provides wireless access to a wired network; connects to existing router/switch via Ethernet; does NOT route between networks. Wireless router: combines WAP + router + often a switch; routes between internet (WAN) and local network (LAN). Home "routers" are actually wireless routers.'
  },
  {
    id: 149, exam: 'core1', domain: 'networking', difficulty: 'medium',
    front: 'What is PoE (Power over Ethernet)?',
    back: 'Delivers electrical power through Ethernet cables to devices. PoE (802.3af): up to 15.4W. PoE+ (802.3at): up to 30W. PoE++ (802.3bt): up to 90W. Powers devices like IP phones, wireless APs, IP cameras, and small switches without separate power adapters.'
  },
  {
    id: 150, exam: 'core1', domain: 'networking', difficulty: 'hard',
    front: 'What is the OSI model and what are its 7 layers?',
    back: 'Layer 7: Application (HTTP, FTP, DNS, SMTP)\nLayer 6: Presentation (TLS/SSL, encryption, compression)\nLayer 5: Session (NetBIOS, RPC — sets up/maintains sessions)\nLayer 4: Transport (TCP/UDP, port numbers, segmentation)\nLayer 3: Network (IP routing, routers)\nLayer 2: Data Link (MAC addresses, Ethernet, switches)\nLayer 1: Physical (cables, hubs, bits, signals)'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CORE 1 — DOMAIN 3: HARDWARE
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 201, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What are the three generations of DDR RAM and their voltage/speeds?',
    back: 'DDR3: 1.5V, 800–2133 MHz, 240-pin DIMM. DDR4: 1.2V, 2133–3200+ MHz, 288-pin DIMM. DDR5: 1.1V, 4800–6400+ MHz, 288-pin DIMM (physically incompatible with DDR4 slots). Each generation is faster, more efficient, and NOT backward compatible with previous slots.'
  },
  {
    id: 202, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What is a SO-DIMM and where is it used?',
    back: 'Small Outline DIMM — a compact RAM format approximately half the length of a full-size DIMM. Used in laptops, mini-PCs, NUCs, and all-in-one computers. DDR4 SO-DIMM: 260 pins. DDR5 SO-DIMM: 262 pins. Functionally identical to desktop DIMM but physically smaller and non-interchangeable.'
  },
  {
    id: 203, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is ECC RAM and what does it do?',
    back: 'Error Correcting Code RAM. Contains extra bits (additional chip on each stick) that detect and automatically correct single-bit memory errors. Prevents data corruption and system crashes from random bit flips (caused by cosmic rays, electrical noise). Required for servers. Not compatible with most consumer motherboards.'
  },
  {
    id: 204, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is dual-channel RAM and how is it configured?',
    back: 'Doubles memory bandwidth by running two RAM sticks in parallel across two memory channels. Requires two identical (or matching capacity) sticks installed in the correct paired slots (usually slots 1+3 or 2+4 — check motherboard manual). Shows as "dual channel" in CPU-Z or similar tools.'
  },
  {
    id: 205, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What are the three SATA generations and their speeds?',
    back: 'SATA I (SATA 1.5Gb/s): 1.5 Gbps — ~150 MB/s real throughput. SATA II (SATA 3Gb/s): 3 Gbps — ~300 MB/s. SATA III (SATA 6Gb/s): 6 Gbps — ~600 MB/s real throughput. All generations are backward compatible. SATA III is the current standard for HDDs and SATA SSDs.'
  },
  {
    id: 206, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is NVMe and why is it faster than SATA?',
    back: 'Non-Volatile Memory Express — a storage protocol designed specifically for SSDs, using PCIe lanes instead of the SATA interface. PCIe 3.0 x4: up to ~3.5 GB/s. PCIe 4.0 x4: up to ~7 GB/s. PCIe 5.0 x4: up to ~14 GB/s. Also supports vastly higher queue depth than SATA (65,535 queues vs 1), reducing latency dramatically.'
  },
  {
    id: 207, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is an M.2 slot and what protocols can it support?',
    back: 'A compact motherboard slot for add-in cards (primarily SSDs). NOT a protocol itself — it is a form factor. M.2 slots can support SATA or NVMe (PCIe) protocols depending on the slot and drive key type. M key slot: NVMe (PCIe). B key or B+M: may be SATA. Check motherboard specs for which protocols each M.2 slot supports.'
  },
  {
    id: 208, exam: 'core1', domain: 'hardware', difficulty: 'hard',
    front: 'What is the difference between M.2 B-key and M-key?',
    back: 'M-key (single notch on right): supports NVMe (PCIe x4) and/or SATA. B-key (single notch on left): supports SATA or PCIe x2. B+M key (notch on both ends): fits in either key slot, typically SATA or PCIe x2. Most consumer NVMe SSDs use M-key. Physical key type prevents inserting wrong protocol drives.'
  },
  {
    id: 209, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What Intel CPU sockets should you know for the A+ exam?',
    back: 'LGA 1151: 8th/9th Gen Core (Coffee/Comet Lake). LGA 1200: 10th/11th Gen Core (Comet/Rocket Lake). LGA 1700: 12th/13th Gen Core (Alder/Raptor Lake). LGA = Land Grid Array — pins are on the motherboard socket, pads on the CPU. Higher pin count = newer generation (generally).'
  },
  {
    id: 210, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What AMD CPU sockets should you know for the A+ exam?',
    back: 'AM4: AMD Ryzen 1000 through 5000 series (2017–2022). PGA (Pin Grid Array) — pins on the CPU. Extremely long platform lifecycle. AM5: AMD Ryzen 7000 series (2022+). LGA — pins moved to the socket like Intel. AM4 and AM5 are NOT compatible — different physical pinout and power delivery.'
  },
  {
    id: 211, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is hyper-threading (Intel HT) / SMT (AMD)?',
    back: 'Simultaneous Multi-Threading — allows each physical CPU core to handle two instruction threads simultaneously. A 4-core/8-thread processor appears to the OS as 8 logical processors. Improves multi-tasking and throughput for thread-parallel workloads but both threads share the same physical execution resources.'
  },
  {
    id: 212, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is thermal paste and why must it be applied correctly?',
    back: 'Thermally conductive compound applied between CPU (or GPU) and heatsink. Fills microscopic surface imperfections that would otherwise trap insulating air. Too little = air pockets causing overheating. Too much = excess oozes out and can cause shorts. Correct application: pea-sized dot in center or thin spread across CPU IHS.'
  },
  {
    id: 213, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What does PCIe x16 mean and what is it typically used for?',
    back: 'Peripheral Component Interconnect Express slot with 16 data lanes. Used primarily for discrete graphics cards (GPUs). PCIe 3.0 x16 provides ~16 GB/s bandwidth. PCIe 4.0 x16: ~32 GB/s. PCIe 5.0 x16: ~64 GB/s. Other slot widths: x1 (Wi-Fi, sound cards), x4 (some NVMe, network cards), x8 (RAID, capture cards).'
  },
  {
    id: 214, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What does POST stand for and what does it do?',
    back: 'Power On Self Test. Hardware diagnostic routine run by the BIOS/UEFI firmware at every startup. Tests: CPU, RAM, storage controllers, GPU, keyboard controller. Failures reported via beep codes (before video) or POST codes (on diagnostic displays). Successful POST = one short beep (or silent) then hands off to bootloader.'
  },
  {
    id: 215, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is UEFI and how does it differ from BIOS?',
    back: 'Unified Extensible Firmware Interface — modern replacement for BIOS. Differences: supports drives >2 TB (GPT partitioning), faster boot via UEFI boot services, graphical interface with mouse support, Secure Boot (blocks unsigned bootloaders), network stack built-in, stores settings in flash memory (not CMOS). BIOS limited to MBR partitions and <2.2 TB drives.'
  },
  {
    id: 216, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is Secure Boot?',
    back: 'A UEFI feature that verifies the bootloader has a valid cryptographic signature from a trusted certificate authority before allowing it to run. Prevents bootkits and rootkits from loading before the OS. Required for Windows 11. Can be disabled in UEFI settings (needed for some Linux distros or older OS installations).'
  },
  {
    id: 217, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is RAID 0 and what are its characteristics?',
    back: 'Striping — data is split across all drives in the array, written simultaneously. Minimum: 2 drives. Performance: reads and writes are fast (proportional to number of drives). Fault tolerance: ZERO — if any single drive fails, ALL data is lost. Use case: temp files, video editing scratch disks where speed matters and data is backed up.'
  },
  {
    id: 218, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is RAID 1 and what are its characteristics?',
    back: 'Mirroring — identical data is written to two (or more) drives simultaneously. Minimum: 2 drives. Usable capacity: 50% (one drive\'s worth). Fault tolerance: can lose 1 drive (or more if mirroring to 3+). Reads slightly faster (can read from either drive). Writes are the speed of the slowest drive. Use case: OS drives, small critical databases.'
  },
  {
    id: 219, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is RAID 5 and what are its characteristics?',
    back: 'Striping with distributed parity. Minimum: 3 drives. Usable capacity: N-1 drives (e.g., 3 drives = capacity of 2). Fault tolerance: can lose 1 drive. Parity data is distributed across all drives (not dedicated parity drive). Read fast, write has parity calculation overhead. Use case: file servers, NAS, general storage.'
  },
  {
    id: 220, exam: 'core1', domain: 'hardware', difficulty: 'hard',
    front: 'What is RAID 6 and how does it differ from RAID 5?',
    back: 'Striping with double distributed parity. Minimum: 4 drives. Usable capacity: N-2 drives. Fault tolerance: can lose 2 drives simultaneously. Write performance lower than RAID 5 (two parity calculations per write). More expensive in drive overhead. Use case: large storage arrays where long rebuild times make double failure more likely.'
  },
  {
    id: 221, exam: 'core1', domain: 'hardware', difficulty: 'hard',
    front: 'What is RAID 10 (1+0)?',
    back: 'Stripe of mirrors — data is mirrored first (RAID 1), then the mirror sets are striped (RAID 0). Minimum: 4 drives. Usable capacity: 50%. Fault tolerance: can lose 1 drive per mirror set (up to half of all drives if distributed correctly). Excellent performance AND redundancy. Use case: high-performance databases, transaction-heavy workloads.'
  },
  {
    id: 222, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is the 24-pin ATX connector?',
    back: 'Main motherboard power connector. Provides multiple voltage rails: +12V, +5V, +3.3V, and -12V. 24-pin replaced the older 20-pin ATX connector (20-pin still fits in 24-pin slots physically but may lack adequate power for modern boards). Every desktop PSU must have this connector.'
  },
  {
    id: 223, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is the 8-pin EPS / CPU power connector?',
    back: 'Dedicated 12V connector that powers the CPU voltage regulator on the motherboard. Also called ATX12V or CPU_PWR. Modern high-end motherboards use two 8-pin connectors (or 4+4 pin for compatibility with older 4-pin only PSUs). Without this connector, the system typically won\'t POST.'
  },
  {
    id: 224, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is the difference between a 6-pin and 8-pin PCIe power connector?',
    back: '6-pin PCIe: delivers up to 75W to GPU (in addition to 75W from PCIe slot = 150W total). 8-pin PCIe: delivers up to 150W to GPU (225W total with slot). High-end GPUs use multiple 8-pin connectors. Modern GPUs may use a 16-pin (12VHPWR) connector for up to 600W.'
  },
  {
    id: 225, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What is an 80 Plus PSU efficiency rating?',
    back: '80 Plus: ≥80% efficiency at 20/50/100% load. Bronze: 82–85%. Silver: 85–88%. Gold: 87–90%. Platinum: 89–92%. Titanium: 90–94%. Higher efficiency = less power wasted as heat = lower electricity cost and less cooling needed. Most gaming PCs use 80 Plus Gold or better.'
  },
  {
    id: 226, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What are SATA power and MOLEX (4-pin) connectors used for?',
    back: 'SATA power: 15-pin connector powering SATA hard drives and SSDs; provides 3.3V, 5V, and 12V. Molex (4-pin Peripheral): older connector for IDE drives, case fans, and accessories; provides 5V and 12V. Largely replaced by SATA power connectors in modern systems.'
  },
  {
    id: 227, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is the difference between TN, IPS, and VA LCD panel technologies?',
    back: 'TN (Twisted Nematic): fastest response (1ms), lowest input lag, poor viewing angles and color accuracy, lowest cost. IPS (In-Plane Switching): excellent color accuracy and 178° viewing angles, slight ghosting, best for design/color work. VA (Vertical Alignment): highest contrast ratio (1000:1+), good colors, slower response, some ghosting — best for movies and mixed use.'
  },
  {
    id: 228, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is an OLED display and its advantages/disadvantages?',
    back: 'Organic LED — each pixel emits its own light (no backlight). Advantages: true blacks (pixel off = 0 light), infinite contrast ratio, faster response than LCD, thinner panels, flexible designs. Disadvantages: potential burn-in with static images, can be more expensive, some brightness limitations at peak white in large areas.'
  },
  {
    id: 229, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What are the resolution names for common display standards?',
    back: '720p (HD): 1280×720. 1080p (FHD, Full HD): 1920×1080. 1440p (QHD, 2K): 2560×1440. 4K (UHD): 3840×2160. 8K: 7680×4320. The number in "p" refers to the number of horizontal scan lines in progressive scan format.'
  },
  {
    id: 230, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What is VGA and its limitations?',
    back: 'Video Graphics Array — analog 15-pin D-sub (DE-15) connector. Maximum practical resolution: 2048×1536 at 85Hz. Being phased out. Key limitations: analog signal requires DAC/ADC conversion (reduces quality), no audio, no copy protection, bulky connector. Replaced by DVI, HDMI, and DisplayPort.'
  },
  {
    id: 231, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What are the different DVI connector types?',
    back: 'DVI-D (Digital only): carries only digital signal. DVI-A (Analog only): carries only analog (like VGA). DVI-I (Integrated): carries both digital AND analog — can connect to either DVI-D or DVI-A (with adapter). Single-link DVI-D: max 1920×1200 at 60Hz. Dual-link DVI-D: max 2560×1600 at 60Hz.'
  },
  {
    id: 232, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What are the advantages of DisplayPort over HDMI?',
    back: 'Higher maximum bandwidth than HDMI 2.0 (though HDMI 2.1 is competitive). MST (Multi-Stream Transport) allows daisy-chaining multiple monitors from one port. Adaptive sync (FreeSync/G-Sync) originated on DisplayPort. Often preferred for PC monitors. Can carry Thunderbolt. Free, open standard (no per-port licensing fee).'
  },
  {
    id: 233, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is the laser printer imaging process (in correct order)?',
    back: '1. Processing: RIP converts print job to bitmap\n2. Charging: drum coated with uniform negative charge\n3. Exposing: laser writes image (removes charge in image areas)\n4. Developing: toner (negatively charged) sticks to exposed areas\n5. Transferring: toner transferred to paper via transfer corona\n6. Fusing: heat + pressure bonds toner permanently\n7. Cleaning: drum cleaned for next page\nMnemonic: "Particularly Crafty Engineers Devour Food Twice Cleverly"'
  },
  {
    id: 234, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What component in a laser printer applies heat to bond toner to paper?',
    back: 'The fuser assembly. Contains a heated roller and pressure roller. Toner is a plastic-based powder that melts at high temperature (~180°C) and bonds to paper fibers. Most common cause of paper jams and "hot" smell. Most common cause of smearing/smudging if it fails (toner wipes off easily).'
  },
  {
    id: 235, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What is an inkjet printer and how does it work?',
    back: 'Uses liquid ink sprayed through microscopic nozzles onto paper. Two technologies: thermal (tiny heaters vaporize ink creating bubbles that eject droplets — HP, Canon) and piezoelectric (electric charge deforms crystal to eject droplets — Epson). Good color photo quality, slower than laser, ink dries if not used regularly.'
  },
  {
    id: 236, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What is a thermal printer and what are its use cases?',
    back: 'Uses heat-sensitive paper that darkens when heated by the print head. No ink, toner, or ribbons needed — just thermal paper. Common uses: receipt printers (POS systems), shipping labels, parking tickets, lottery tickets. Paper fades over time (heat/UV sensitive). Advantage: simple, fast, quiet, low maintenance.'
  },
  {
    id: 237, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What is an impact printer and where is it still used?',
    back: 'Pins strike an ink ribbon to print characters/dots on paper — like a typewriter. Also called dot matrix printer. Uses: multi-part forms (carbon copies) requiring physical pressure to print through layers, kitchen order tickets, industrial environments needing durability. Loud, slow, but can print through paper stacks.'
  },
  {
    id: 238, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What are the ATX, Micro-ATX, and Mini-ITX motherboard sizes?',
    back: 'ATX: 305 × 244 mm — standard; up to 7 expansion slots. Micro-ATX (mATX): 244 × 244 mm — smaller; up to 4 slots; fits standard ATX cases. Mini-ITX: 170 × 170 mm — smallest standard; 1 PCIe slot; requires specialized small-form-factor (SFF) cases. All three have standardized mounting hole patterns.'
  },
  {
    id: 239, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What are USB 2.0, USB 3.0, USB 3.1 Gen 2, and USB 3.2 maximum speeds?',
    back: 'USB 2.0 (Hi-Speed): 480 Mbps. USB 3.0 / 3.1 Gen 1 / 3.2 Gen 1×1: 5 Gbps — blue connectors. USB 3.1 Gen 2 / 3.2 Gen 2×1: 10 Gbps — teal/blue or red connectors. USB 3.2 Gen 2×2: 20 Gbps — requires USB-C. USB4: up to 40 Gbps (same as Thunderbolt 3).'
  },
  {
    id: 240, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is Thunderbolt and how does it differ from regular USB-C?',
    back: 'Thunderbolt 3/4 uses the USB-C connector but is a different, Intel-developed protocol with higher specs. TB3/4: 40 Gbps bandwidth, can daisy-chain up to 6 devices, supports DisplayPort and PCIe over the same cable, powers up to 100W. Not all USB-C ports are Thunderbolt — look for the lightning bolt icon.'
  },
  {
    id: 241, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What is a CMOS battery and what happens when it fails?',
    back: 'A 3V CR2032 lithium coin cell battery on the motherboard. Maintains BIOS/UEFI settings (date, time, boot order, hardware config) when the system is powered off. When it dies: system clock resets to default date on every boot, BIOS settings are lost, POST may show "CMOS checksum error." Replace every 5-7 years or as needed.'
  },
  {
    id: 242, exam: 'core1', domain: 'hardware', difficulty: 'hard',
    front: 'What is SAS (Serial Attached SCSI) and where is it used?',
    back: 'Enterprise storage interface that connects hard drives and SSDs to servers. Advantages over SATA: higher reliability, dual-port redundancy, longer cable runs, better error handling, support for SAS Expanders (connects many drives). Speeds: SAS-3: 12 Gbps. Used in servers and enterprise storage arrays where reliability matters more than cost.'
  },
  {
    id: 243, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What are the common HDD speeds and their use cases?',
    back: '5400 RPM: laptop drives, NAS, low noise/power, cooler running. 7200 RPM: standard desktop drives, balanced performance/cost. 10,000 RPM: older enterprise SATA drives (WD Raptor). 15,000 RPM: SAS enterprise drives, maximum mechanical performance. Higher RPM = lower seek time but more heat, noise, and power consumption.'
  },
  {
    id: 244, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is the CPU cache hierarchy and what does each level do?',
    back: 'L1 cache: smallest (32-64 KB per core), fastest, on-die, stores most recently used data/instructions. L2 cache: larger (256 KB – 1 MB per core), slower than L1, still very fast. L3 cache (LLC): largest (8-64 MB shared between cores), slowest of three, still much faster than RAM. Cache miss → goes to next slower level → RAM → storage.'
  },
  {
    id: 245, exam: 'core1', domain: 'hardware', difficulty: 'hard',
    front: 'What is a modular vs non-modular PSU?',
    back: 'Non-modular: all cables permanently attached to PSU — cleaner internals avoided, cable clutter can block airflow. Semi-modular: essential cables (24-pin ATX, CPU) are fixed; optional cables (SATA, PCIe) are detachable. Fully modular: all cables detach — cleanest build, better airflow, only connect what you need, more expensive. All offer same performance when properly installed.'
  },
  {
    id: 246, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is the purpose of a heat sink and CPU fan?',
    back: 'Heat sink: metal (usually aluminum or copper) structure attached to CPU that absorbs and spreads heat through large surface area fins. CPU fan: moves air across fins to carry heat away. Together they prevent thermal throttling (CPU slowing itself when too hot) and thermal shutdown. Thermal paste between CPU IHS and heat sink base ensures good contact.'
  },
  {
    id: 247, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    front: 'What is dpi in the context of printers?',
    back: 'Dots Per Inch — resolution measurement. Higher dpi = more dots per inch = sharper, more detailed output. Typical laser printer: 600–1200 dpi. Photo inkjet: 1200–9600 dpi. For standard text documents 600 dpi is excellent; high-quality photo printing benefits from higher dpi. Does not affect speed.'
  },
  {
    id: 248, exam: 'core1', domain: 'hardware', difficulty: 'hard',
    front: 'What is the difference between HDMI 2.0 and HDMI 2.1?',
    back: 'HDMI 2.0: 18 Gbps bandwidth, max 4K at 60Hz HDR, or 1080p at 240Hz. HDMI 2.1: 48 Gbps bandwidth, supports 4K at 120Hz, 8K at 60Hz, 10K support, Dynamic HDR, eARC (enhanced audio return channel), Variable Refresh Rate (VRR). Required for high-fps 4K gaming (PS5, Xbox Series X).'
  },
  {
    id: 249, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is SMART in the context of hard drives?',
    back: 'Self-Monitoring, Analysis, and Reporting Technology. Built into HDDs and SSDs. Monitors internal drive health metrics: read error rate, spin-up time, reallocated sectors, power-on hours, temperature. Tools like CrystalDiskInfo or the manufacturer\'s diagnostics read SMART data. Reallocated sectors increasing = drive is remapping bad sectors = replace soon.'
  },
  {
    id: 250, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    front: 'What is a KVM switch?',
    back: 'Keyboard, Video, Mouse switch. Allows one set of keyboard, monitor, and mouse to control multiple computers. Press a button or keyboard shortcut to switch between connected PCs. Used in server rooms (manage multiple servers), dual-workstation setups, and for comparing systems. Available in 2-port to 64+ port configurations.'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CORE 1 — DOMAIN 4: VIRTUALIZATION & CLOUD COMPUTING
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 301, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is a Type 1 hypervisor?',
    back: 'Bare-metal hypervisor installed directly on hardware — no host OS underneath. VMs run at near-native performance. Examples: VMware ESXi, Microsoft Hyper-V (Server edition), Citrix Hypervisor (XenServer), KVM (Linux kernel module). Used in enterprise data centers and server virtualization.'
  },
  {
    id: 302, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is a Type 2 hypervisor?',
    back: 'Hosted hypervisor that runs as an application on a standard OS (host OS). VMs run within the host OS — additional overhead vs Type 1. Examples: VMware Workstation/Fusion, Oracle VirtualBox, Parallels Desktop. Used for development, testing, running multiple OS on a desktop. Easier to install.'
  },
  {
    id: 303, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is IaaS and give two examples?',
    back: 'Infrastructure as a Service. Provider manages physical hardware, networking, and virtualization layer. Customer manages: OS, middleware, runtime, applications, and data. Examples: AWS EC2 (virtual machines), Microsoft Azure VMs, Google Compute Engine. You rent virtual hardware — build what you need on top.'
  },
  {
    id: 304, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is PaaS and give two examples?',
    back: 'Platform as a Service. Provider manages hardware + OS + middleware + runtime. Customer manages: applications and data only. Examples: Heroku, Google App Engine, Microsoft Azure App Service, AWS Elastic Beanstalk. Developers deploy code without managing servers — ideal for web apps and APIs.'
  },
  {
    id: 305, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is SaaS and give two examples?',
    back: 'Software as a Service. Provider manages everything — hardware through application. Customer only manages: their data and user access settings. Examples: Microsoft 365, Google Workspace (Gmail/Drive), Salesforce, Slack, Zoom. Access via browser or thin client. No installation or maintenance required by customer.'
  },
  {
    id: 306, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is a public cloud?',
    back: 'Cloud infrastructure owned and operated by a third-party provider and shared among multiple customers (multi-tenant). Accessed via the internet. Pay-as-you-go pricing. Massive scalability. Examples: Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP). Lowest upfront cost, least control over physical security.'
  },
  {
    id: 307, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is a private cloud?',
    back: 'Cloud infrastructure dedicated exclusively to one organization. Can be on-premises (owned hardware in own data center) or hosted by a provider for exclusive use. Greater control over security and compliance. More expensive than public cloud. Often used by financial institutions, government agencies, and healthcare organizations.'
  },
  {
    id: 308, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is a hybrid cloud?',
    back: 'Combination of private and public cloud environments connected by technology that allows data and applications to move between them. Typical use: keep sensitive data in private cloud, use public cloud for scalable workloads or overflow (cloud bursting). Requires secure connectivity (VPN or dedicated link like AWS Direct Connect).'
  },
  {
    id: 309, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is a community cloud?',
    back: 'Shared cloud infrastructure for a specific group of organizations with common concerns — same industry, regulatory requirements, or mission. Costs and governance are shared among members. Examples: government clouds (GovCloud), healthcare clouds for HIPAA compliance, financial services shared infrastructure. Between public and private in terms of control and cost.'
  },
  {
    id: 310, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What are the 5 essential characteristics of cloud computing (NIST definition)?',
    back: '1. On-demand self-service: provision resources without human interaction\n2. Broad network access: available over the network via standard mechanisms\n3. Resource pooling: multi-tenant model, location independence\n4. Rapid elasticity: scale up/down quickly, appears unlimited\n5. Measured service: usage monitored, controlled, and billed (pay per use)'
  },
  {
    id: 311, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is the difference between a VM and a container?',
    back: 'VM: includes full OS (kernel + userspace), runs on hypervisor, complete isolation, seconds to minutes to start, larger size (GBs). Container: shares host OS kernel, runs on container runtime (Docker), process-level isolation, starts in milliseconds, much smaller (MBs). Containers are lighter and faster but slightly less isolated.'
  },
  {
    id: 312, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is Docker?',
    back: 'The most widely used container platform. Creates, deploys, and manages containers using images (read-only templates) and Dockerfiles (build instructions). Docker Hub: public registry of pre-built images. Key concepts: image, container, registry, Dockerfile, docker-compose (multi-container apps). Runs on Linux, Windows, and macOS.'
  },
  {
    id: 313, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is a VM snapshot?',
    back: 'A point-in-time preserved state of a VM — includes disk state and optionally memory state. Allows quick rollback if a change causes problems. Snapshots are NOT backups — they depend on the original disk. Multiple snapshots slow VM performance and consume disk space. Always delete unneeded snapshots.'
  },
  {
    id: 314, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is live migration of a VM?',
    back: 'Moving a running virtual machine from one physical host to another with zero (or near-zero) downtime. Memory contents, disk state, and network connections are transferred while the VM stays running. VMware vMotion and Microsoft Live Migration are the common implementations. Requires shared storage or block-level replication.'
  },
  {
    id: 315, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is cloud bursting?',
    back: 'A hybrid cloud technique where an application runs in a private cloud but automatically "bursts" (scales out) to a public cloud when demand exceeds private capacity. Handles seasonal peaks without over-provisioning private infrastructure. Public cloud resources are provisioned on-demand and released when demand drops.'
  },
  {
    id: 316, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is the difference between vertical scaling and horizontal scaling?',
    back: 'Vertical scaling (Scale up): add more resources to an existing server — more CPU, RAM, storage. Has physical limits. Requires downtime. Horizontal scaling (Scale out): add more server instances to distribute load. Preferred for cloud-native applications. Enables near-unlimited capacity with proper architecture (load balancers required).'
  },
  {
    id: 317, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is the shared responsibility model in cloud computing?',
    back: 'Defines who is responsible for security between cloud provider and customer. Provider is responsible FOR the cloud: physical hardware, data center security, hypervisor, global network. Customer is responsible IN the cloud: data, user access management, OS patching (IaaS), application security, encryption. Responsibility shifts based on service model (IaaS → PaaS → SaaS = more shifts to provider).'
  },
  {
    id: 318, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What are the three hypervisor networking modes — NAT, Bridged, and Host-Only?',
    back: 'NAT: VM shares host\'s IP, not directly reachable from network, internet access through host. Bridged: VM gets its own IP from network DHCP, appears as a separate device on network, fully accessible. Host-Only: VM can communicate with host and other VMs only, completely isolated from external network — safe for testing malware or isolated dev environments.'
  },
  {
    id: 319, exam: 'core1', domain: 'virtualization', difficulty: 'hard',
    front: 'What is hardware-assisted virtualization (Intel VT-x / AMD-V)?',
    back: 'CPU extensions that allow the hypervisor to run VMs at near-native speed by allowing VM code to run directly on the CPU rather than being emulated. Intel VT-x (Virtualization Technology) and AMD-V (AMD Virtualization / SVM). Must be enabled in UEFI/BIOS. Required for 64-bit VMs on most hypervisors and for Hyper-V on Windows.'
  },
  {
    id: 320, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is VDI (Virtual Desktop Infrastructure)?',
    back: 'Hosts desktop OS instances on central servers. Users connect from thin clients, laptops, or any device via remote display protocol (RDP, PCoIP, Blast Extreme). Centralized management: patch one master image, update thousands of desktops. Data stays on server — safer for remote workers. Examples: VMware Horizon, Citrix DaaS, Microsoft AVD.'
  },
  {
    id: 321, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is a thin client?',
    back: 'Minimal hardware device designed to connect to a server and run applications remotely. Little local processing power or storage. Relies on server for compute (VDI or terminal server). Advantages: lower cost, easier management, longer lifespan, less powerful hardware needed. Disadvantages: dependent on network connectivity and server availability.'
  },
  {
    id: 322, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is an SLA (Service Level Agreement) in cloud services?',
    back: 'Contract specifying guaranteed service levels between cloud provider and customer. Typically includes: uptime guarantee (e.g., 99.9% = ~8.7 hrs downtime/year, 99.99% = ~52 min/year), support response times, performance metrics, remedies for breaches (service credits). Essential for production workloads.'
  },
  {
    id: 323, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is CapEx vs OpEx in the context of cloud computing?',
    back: 'CapEx (Capital Expenditure): large upfront purchase of on-premises hardware — servers, networking, data center space. Depreciated over time. OpEx (Operating Expenditure): ongoing operational costs — monthly cloud bills. Cloud shifts IT spending from CapEx to OpEx. Benefit: lower upfront investment, pay only for what you use, no hardware refresh cycles.'
  },
  {
    id: 324, exam: 'core1', domain: 'virtualization', difficulty: 'hard',
    front: 'What is Infrastructure as Code (IaC)?',
    back: 'Managing and provisioning infrastructure through machine-readable configuration files instead of manual processes. Enables: version control of infrastructure, automated deployments, reproducible environments, disaster recovery. Tools: Terraform (cloud-agnostic), AWS CloudFormation (AWS-specific), Ansible (configuration management). Treats infrastructure like software.'
  },
  {
    id: 325, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is auto-scaling in cloud computing?',
    back: 'Automatically adjusts the number of compute instances based on defined metrics (CPU usage, request count, queue depth). Scales OUT (adds instances) when load increases above threshold. Scales IN (removes instances) when load drops. Requires a load balancer to distribute traffic. Key benefit: handle variable load without over-provisioning.'
  },
  {
    id: 326, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is a virtual NIC (vNIC)?',
    back: 'Software-defined network interface card presented to a virtual machine by the hypervisor. Appears as a real NIC to the VM\'s operating system. Each VM can have multiple vNICs connected to different virtual switches or networks. The hypervisor handles translation between vNIC and physical NIC.'
  },
  {
    id: 327, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is cloud storage and give three examples?',
    back: 'Storing data on remote servers accessed via internet rather than on local hardware. Object storage: AWS S3, Azure Blob Storage, Google Cloud Storage. File storage: Google Drive, OneDrive, iCloud, Dropbox. Block storage (cloud disks): AWS EBS, Azure Managed Disks. Benefits: accessible anywhere, redundant, scales on demand, no hardware to manage.'
  },
  {
    id: 328, exam: 'core1', domain: 'virtualization', difficulty: 'hard',
    front: 'What is serverless computing?',
    back: 'Cloud execution model where the provider dynamically allocates and manages all server infrastructure. Code runs in stateless functions (Function as a Service — FaaS) triggered by events. You pay only for execution time (milliseconds). Examples: AWS Lambda, Azure Functions, Google Cloud Functions. No servers to manage, but limited execution duration and cold start latency.'
  },
  {
    id: 329, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is a CDN (Content Delivery Network)?',
    back: 'Network of geographically distributed servers that cache and deliver content from locations close to users. Reduces latency (content served from nearby server instead of origin), reduces origin server load, and improves availability. Examples: Cloudflare, AWS CloudFront, Akamai, Fastly. Critical for global web applications.'
  },
  {
    id: 330, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is multi-tenancy in cloud computing?',
    back: 'Multiple customers (tenants) share the same physical hardware, network, and software infrastructure while being logically isolated from each other. Each tenant\'s data is inaccessible to other tenants. Enables cloud providers to achieve economies of scale. Security concern: if isolation breaks (hypervisor exploit), tenant data could be exposed.'
  },
  {
    id: 331, exam: 'core1', domain: 'virtualization', difficulty: 'hard',
    front: 'What is a VPC (Virtual Private Cloud)?',
    back: 'A logically isolated virtual network within a public cloud. You define: IP address range (CIDR block), subnets (public and private), routing tables, internet gateway, VPN connections. Your cloud resources run in this private network. Combines public cloud infrastructure with private network control. AWS VPC, Azure VNet, GCP VPC.'
  },
  {
    id: 332, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is VM cloning?',
    back: 'Creating an exact copy of a virtual machine. Full clone: completely independent copy — consumes same disk space as original, no dependency. Linked clone: shares base disk with original (smaller), changes go to a delta disk — dependent on original VM and snapshot. Full clones are better for long-term independent use.'
  },
  {
    id: 333, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is a virtual switch (vSwitch)?',
    back: 'Software-defined network switch that exists entirely within the hypervisor. Connects VMs to each other and to physical network adapters. Functions like a physical switch: can be configured with VLANs, trunk ports, security policies. VMware: vSphere Standard/Distributed Switch. Hyper-V: Hyper-V Virtual Switch. All traffic between VMs on same host goes through vSwitch without hitting physical network.'
  },
  {
    id: 334, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    front: 'What is resource pooling in the context of cloud computing?',
    back: 'Provider\'s physical resources (compute, storage, network) are pooled to serve multiple customers using a multi-tenant model, with different physical and virtual resources dynamically assigned and reassigned according to demand. Customers generally have no control over or knowledge of the exact location of the provided resources (country/state/datacenter level only).'
  },
  {
    id: 335, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    front: 'What is on-demand self-service in cloud computing?',
    back: 'A customer can provision computing capabilities (server time, network storage) automatically without requiring human interaction with the cloud provider. Done through a web portal, API, or CLI — no phone calls or manual approvals needed. Example: launching a new AWS EC2 instance via console takes seconds with no provider involvement.'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CORE 1 — DOMAIN 5: HARDWARE & NETWORK TROUBLESHOOTING
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 401, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    front: 'What are CompTIA\'s 6 steps of troubleshooting (in order)?',
    back: '1. Identify the problem\n2. Establish a theory of probable cause\n3. Test the theory to determine the cause\n4. Establish a plan of action and implement the solution\n5. Verify full system functionality; implement preventive measures\n6. Document findings, actions, and outcomes\n\nMnemonic: "I Every Tech Eats Vegetables Daily"'
  },
  {
    id: 402, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What does "identify the problem" mean in troubleshooting Step 1?',
    back: 'Gather information: interview the user (what happened? what changed?), reproduce the issue, check error messages, review system logs, identify symptoms vs root cause. Back up data before making changes if possible. Document everything you observe.'
  },
  {
    id: 403, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What does "establish a theory of probable cause" mean in troubleshooting?',
    back: 'Apply Occam\'s Razor — consider the simplest and most common causes first before complex ones. If a monitor won\'t display: check if it\'s on and the cable is connected before suspecting GPU failure. Build a list of potential causes ranked by likelihood. Consider recent changes — most problems have a trigger event.'
  },
  {
    id: 404, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'A PC powers on but nothing displays on the monitor. What do you check first?',
    back: '1. Is monitor powered on? 2. Is video cable securely connected at both ends? 3. Is monitor set to correct input source? 4. Test with a known-good monitor or cable. 5. If no beeps: is GPU properly seated? 6. If beeps: interpret POST code. 7. Try onboard graphics (remove discrete GPU). 8. Reseat RAM. 9. Try minimal hardware configuration.'
  },
  {
    id: 405, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    front: 'A PC won\'t power on at all — no lights, no fans. What is the first thing to check?',
    back: '1. Power cord connected at both ends? 2. Outlet has power? (test with other device) 3. Power strip/UPS switched on? 4. PSU rear switch in ON position? 5. Front panel power header properly connected to motherboard? If all check out: test PSU with tester or paperclip test; check if 24-pin and 8-pin EPS are connected.'
  },
  {
    id: 406, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'How do you diagnose a failing hard drive?',
    back: '1. Listen for clicking/grinding (mechanical failure). 2. Check SMART data (CrystalDiskInfo, manufacturer tool) — reallocated sectors, pending sectors, uncorrectable errors. 3. Run manufacturer\'s diagnostic (SeaTools, WD Diagnostics). 4. Note slow boot times, frequent freezes, or file errors. 5. Back up IMMEDIATELY before further testing. Replace if SMART shows errors.'
  },
  {
    id: 407, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What is the "click of death" and what should you do?',
    back: 'A repetitive clicking sound from an HDD caused by the read/write head repeatedly failing to find its target (parking or reset cycle). Indicates mechanical failure — the drive is dying or already failed. Immediately stop using the drive and attempt data backup/recovery. Professional recovery services may recover data from failed drives.'
  },
  {
    id: 408, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What tool is used to run advanced RAM diagnostics?',
    back: 'Memtest86 (or Memtest86+) — a free, bootable diagnostic that runs extensive memory tests independent of the OS. Run for multiple passes (3-4 hours minimum). Any error = bad RAM. Also try: reseating RAM sticks, testing sticks individually, and testing in different slots. Windows Memory Diagnostic is less thorough but built-in.'
  },
  {
    id: 409, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'A system randomly restarts during heavy workloads. What are the most likely causes?',
    back: '1. CPU or GPU overheating — check temps with HWMonitor/HWiNFO (CPU should stay under ~95°C, GPU under ~85°C). 2. PSU failing under load — insufficient wattage or failing voltage rails. 3. RAM instability — run Memtest86. 4. Overclocking instability. 5. Driver crash causing reboot. Check Event Viewer for critical errors preceding restart.'
  },
  {
    id: 410, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    front: 'What tool is used to test a power supply?',
    back: 'PSU tester: plugs into 24-pin connector, shows voltage readings for each rail — simple go/no-go test. Multimeter: more accurate, measure specific rails under load (+12V should be 11.4–12.6V; +5V should be 4.75–5.25V; +3.3V should be 3.135–3.465V). Paperclip test: shorts PS_ON to Ground on 24-pin to see if PSU will spin up at all.'
  },
  {
    id: 411, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'hard',
    front: 'What are POST beep codes and how do you interpret them?',
    back: 'Audible codes generated by the BIOS/UEFI during POST when video output is unavailable. Patterns vary by BIOS manufacturer: 1 short beep = POST OK (AMI). 1 long + 2 short = Video error (AMI). 3 short beeps = RAM failure (AMI). No beep = CPU or motherboard failure. Consult the specific motherboard manual for accurate codes. Some modern boards have diagnostic LED displays instead.'
  },
  {
    id: 412, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'A laptop keyboard is unresponsive. How do you determine if it\'s hardware or software?',
    back: '1. Connect an external USB keyboard — if that works, the built-in keyboard has failed (hardware). 2. If external also fails: check device manager for keyboard driver, try reinstalling driver, update OS. 3. Boot from live USB to test outside Windows — if keyboard works there, it\'s a Windows driver/software issue. 4. Check for liquid damage, debris, or damaged ribbon cable.'
  },
  {
    id: 413, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What does the ipconfig command show?',
    back: 'Basic: Shows IP address, subnet mask, and default gateway for each network adapter. ipconfig /all: adds MAC address, DHCP server address, DNS servers, lease obtained/expires, hostname, IPv6 addresses. ipconfig /release: releases DHCP lease. ipconfig /renew: requests new DHCP lease. ipconfig /flushdns: clears DNS resolver cache.'
  },
  {
    id: 414, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    front: 'What does ping 127.0.0.1 test?',
    back: 'Tests the loopback address — verifies that the local TCP/IP stack is installed and functioning. If this fails, TCP/IP is corrupted or not installed. If it succeeds, the NIC itself is the next test (ping 127.0.0.1 doesn\'t require a physical connection). Next step: ping the default gateway to test the physical layer.'
  },
  {
    id: 415, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What does an APIPA address (169.254.x.x) indicate?',
    back: 'DHCP server was unreachable when the device requested an IP. Windows automatically assigned an APIPA (Automatic Private IP Addressing) address. Device can communicate with other APIPA devices on the same subnet but has NO internet access. Troubleshoot: check DHCP server is running, check network cable and switch port, check for IP address pool exhaustion on DHCP server.'
  },
  {
    id: 416, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What does the tracert command do?',
    back: 'Traces the path packets take from your computer to a destination, showing each router hop (max 30 by default). Displays IP of each hop and round-trip latency for 3 packets. Use: identify where a network connection is failing or becoming slow. High latency at a specific hop indicates congestion or a problem at that router. "* * *" = firewall blocking ICMP.'
  },
  {
    id: 417, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What does nslookup do and how is it used in troubleshooting?',
    back: 'Queries DNS servers to resolve domain names to IP addresses (and vice versa). nslookup google.com: shows which DNS server answered and the resulting IP address. If nslookup works but browser doesn\'t: browser/proxy issue. If nslookup fails but ping to IP works: DNS is broken. nslookup google.com 8.8.8.8 queries Google\'s DNS specifically.'
  },
  {
    id: 418, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'A user can ping the gateway but cannot reach external websites. What is the problem?',
    back: 'Could be: 1. DNS failure — ping an external IP directly (e.g., ping 8.8.8.8); if that works, DNS is broken (wrong DNS server, DNS server down). 2. Internet routing issue at ISP — contact ISP. 3. Firewall blocking outbound traffic. 4. Proxy misconfiguration. Start with "ping 8.8.8.8" to separate DNS from routing issues.'
  },
  {
    id: 419, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What causes intermittent wireless drops for one user?',
    back: 'Most likely: weak signal at that location (test signal strength), interference on the wireless channel (use Wi-Fi analyzer), outdated or corrupt wireless adapter driver, power management settings (Windows setting adapter to low power), IP conflict, or a failing wireless adapter. Check other users in same area — if they\'re fine, it\'s specific to that device/adapter.'
  },
  {
    id: 420, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    front: 'What is a loopback plug and what does it test?',
    back: 'A connector that loops the transmit pins back to the receive pins of a port. For Ethernet: a loopback plug on a NIC\'s RJ-45 port verifies the NIC can send and receive data (hardware working). Helps isolate whether a NIC is the problem vs the cable or network. Available for RJ-45, RS-232, USB, and other port types.'
  },
  {
    id: 421, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'A laser printer produces output where toner smears easily when touched. What is the cause?',
    back: 'The fuser assembly is failing — not reaching sufficient temperature to properly melt and bond toner to the paper. The toner is transferred but not fused. Solution: replace the fuser assembly (a consumable with a rated page count). Also check: correct paper type (heavy stock can cause fusing issues), damaged pressure roller.'
  },
  {
    id: 422, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What causes vertical black lines repeating on every page of a laser printout?',
    back: 'Damage to the drum (photoconductor unit). A scratch, nick, or contamination on the drum surface consistently picks up toner in that location for every rotation. Solution: replace the drum unit (often included with the toner cartridge as a combo unit). Also check for debris in the paper path. If lines appear only sometimes: could be a dirty fuser roller.'
  },
  {
    id: 423, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'A laser printer is grabbing multiple pages at once. What is the likely cause?',
    back: 'Worn or dirty pickup rollers or separation pad (which prevents multiple sheets from feeding). Also: static electricity causing paper sheets to stick together (fan paper before loading), humidity warping paper, overfilled paper tray, wrong paper type. Clean rollers with isopropyl alcohol; replace if cleaning doesn\'t help.'
  },
  {
    id: 424, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    front: 'A printer shows "offline" in Windows. What steps do you take?',
    back: '1. Check physical connection (USB or network cable) and printer power. 2. Verify printer\'s IP address if network printer (ping it). 3. Clear stuck print queue: Services → Stop Print Spooler → delete files in C:\\Windows\\System32\\spool\\PRINTERS → Start Print Spooler. 4. Right-click printer → See what\'s printing → Printer → uncheck "Use Printer Offline." 5. Reinstall printer driver.'
  },
  {
    id: 425, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What causes an inkjet printer to print with missing colors or horizontal streaks?',
    back: 'Clogged print nozzles — dried ink blocks the microscopic nozzles. Solution: run the printer\'s built-in head cleaning cycle (several times if needed). Print a nozzle check pattern to identify which colors are missing. If cleaning doesn\'t help: replace the ink cartridge (nozzles may be on the cartridge), or if printhead is built into printer, it may need replacement.'
  },
  {
    id: 426, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    front: 'A thermal receipt printer prints blank pages. What is the cause?',
    back: 'Thermal paper is loaded backward — the thermal (heat-reactive) coating is on only one side of the paper. The print head is heating the non-coated side. Solution: flip the paper roll so the coated side faces the print head. Also check: verify correct thermal paper type and that print head is clean.'
  },
  {
    id: 427, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What does the netstat -a command show?',
    back: 'Displays all active TCP connections and all listening TCP and UDP ports on the local machine. Shows: local address, foreign address, and connection state (ESTABLISHED, LISTENING, TIME_WAIT, CLOSE_WAIT). Use: identify unauthorized connections, verify services are listening, troubleshoot connection issues. netstat -n: numeric IPs instead of hostnames. netstat -b: includes executable names (requires admin).'
  },
  {
    id: 428, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What is a network cable tester and what does it verify?',
    back: 'Tests all 8 wires in an Ethernet cable for: continuity (all wires connected end-to-end), correct pinout (T568A or T568B standard), no crossed pairs (unless testing crossover cable), no shorts (wires touching each other), wire map (each pin number at one end matches same pin at other end). Does NOT test performance or electrical characteristics — use a qualification tester for that.'
  },
  {
    id: 429, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'When troubleshooting, why should you only change one variable at a time?',
    back: 'To isolate the actual cause. If you change multiple things simultaneously and the problem resolves, you cannot determine which change fixed it. Next time the issue occurs, you won\'t know what to do. Single-variable testing creates a controlled experiment: change one thing, test, if not resolved → revert and try next. This is fundamental to the scientific troubleshooting method.'
  },
  {
    id: 430, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What is a Wi-Fi analyzer and what does it show?',
    back: 'A tool (app or hardware) that scans the wireless spectrum and displays: all visible SSIDs, their signal strength (dBm), channel they\'re using, security type, and frequency band. Use it to: identify channel congestion (too many APs on same channel), find the least congested channel, verify AP placement/coverage, diagnose interference. Examples: Acrylic WiFi, inSSIDer, macOS Wireless Diagnostics.'
  },
  {
    id: 431, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'hard',
    front: 'What is a network broadcast storm and what causes it?',
    back: 'When broadcast or multicast packets continuously loop and multiply throughout a network segment, consuming all bandwidth — network becomes unusable. Caused by: network loops (two or more paths between switches without STP), a failing NIC sending constant broadcast traffic. Prevention: Spanning Tree Protocol (STP) blocks redundant switch paths. Symptom: network extremely slow or completely unavailable, switch LEDs flickering rapidly.'
  },
  {
    id: 432, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What does "ipconfig /flushdns" do?',
    back: 'Clears (flushes) the local DNS resolver cache — the temporary database of recent DNS lookups Windows stores to speed up future name resolution. Use when: a website has moved to a new IP but still resolving to old one, DNS changes aren\'t reflecting, cached entry is corrupt. The cache rebuilds automatically from DNS queries after flushing.'
  },
  {
    id: 433, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What is a multimeter used for in PC repair?',
    back: 'Measures electrical properties: Voltage (V): test PSU output rails, check outlet voltage, test laptop adapter output. Current (A): less common in PC repair. Resistance (Ω): check cable continuity. Continuity mode: audible beep when circuit is complete — useful for testing cable wiring. Key test: measure PSU +12V rail (should be 11.4–12.6V) under light and heavy load.'
  },
  {
    id: 434, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'A monitor has a flickering image. What should you check?',
    back: '1. Check video cable connection at both monitor and GPU. 2. Try a different cable (bad cable is common). 3. Try a different port type (HDMI vs DisplayPort). 4. Verify correct refresh rate set in Windows Display Settings. 5. Update GPU driver. 6. Test monitor on another computer. 7. Test another monitor on this computer. Systematic elimination identifies cable, GPU, or monitor as the faulty component.'
  },
  {
    id: 435, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What should you do BEFORE making any changes when troubleshooting?',
    back: 'Back up the user\'s data. Also: document the current state (screenshot settings, note configuration), gather information from the user (what changed recently?), reproduce the issue, and check for known issues or manufacturer advisories. Changes can sometimes make things worse — a backup ensures you can always recover. This aligns with Step 4 of the CompTIA troubleshooting methodology.'
  },
  {
    id: 436, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'hard',
    front: 'What command shows the ARP table and what is it used for in troubleshooting?',
    back: 'arp -a displays the ARP (Address Resolution Protocol) cache — a table mapping IP addresses to MAC addresses of recently communicated devices on the local network. Use: verify a device\'s MAC address, detect IP conflicts (two IPs mapped to same MAC), identify unknown devices. arp -d clears the cache. Stale entries time out automatically.'
  },
  {
    id: 437, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What is a ghost image (ghosting) on a laser printer?',
    back: 'A faint copy of a previous page appearing on the current page, offset by the circumference of the drum. Caused by: failing drum unit not fully cleaning/erasing previous charge, or a fuser not fully cleaning residual toner. Solution: replace the drum unit or fuser assembly (whichever is responsible). Ghost from same page = different cause (reflection off fuser roller).'
  },
  {
    id: 438, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'hard',
    front: 'How do you determine if a network issue is on the client device or the network?',
    back: '1. Test from a different device on the same port/AP — if same issue, it\'s the network (cable, switch port, AP). If other device works, problem is the original device\'s NIC, driver, or config. 2. Move the device to a known-good port/AP — if issue follows, it\'s the device. 3. ipconfig to verify correct IP, subnet, gateway, DNS on the device. This process-of-elimination isolates the problem layer.'
  },
  {
    id: 439, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What causes a computer to overheat and what are the solutions?',
    back: 'Causes: accumulated dust blocking airflow, failed or slow CPU fan, dried out/missing thermal paste, poorly seated heatsink, inadequate case ventilation, ambient temperature too high. Solutions: clean dust with compressed air, replace failed fans, reapply thermal paste, ensure heatsink is properly mounted, add case fans, improve cable management for airflow, move to cooler environment.'
  },
  {
    id: 440, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    front: 'What does the "Device Manager" show in Windows and how is it used in troubleshooting?',
    back: 'Shows all hardware devices and their driver status. Yellow exclamation mark (!) = driver problem or device conflict. Red X = device disabled. Arrow icon = device disabled manually. Use: update drivers, roll back drivers to previous version, disable/enable devices, scan for hardware changes, view device properties and resource assignments. Access via devmgmt.msc or right-click Computer → Manage.'
  },
  {
    id: 441, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What is the purpose of documenting findings after troubleshooting (Step 6)?',
    back: 'Creates a knowledge base for future reference — if the same issue occurs again, technicians can check documentation for the solution. Provides an audit trail for change management. Satisfies ticketing system requirements and SLA documentation. Helps identify recurring problems (indicating a need for a permanent fix rather than repeated repairs). Protects the technician by demonstrating what was done.'
  },
  {
    id: 442, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'hard',
    front: 'What steps do you take to troubleshoot a laptop that won\'t boot after a Windows update?',
    back: '1. Boot to Advanced Startup Options (F8 or Shift+Restart): try Startup Repair. 2. Try "Uninstall Updates" option from Advanced Startup. 3. Boot to Safe Mode — if boots, update is causing driver conflict (Device Manager to find problem driver). 4. System Restore to pre-update restore point. 5. Last Known Good Configuration (older Windows). 6. If BSOD: note stop code and lookup. 7. Boot from Windows install media: Startup Repair or command-line recovery.'
  },
  {
    id: 443, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What is TDR (Time Domain Reflectometry) in cable testing?',
    back: 'Advanced cable testing technique that sends a signal pulse down a cable and measures reflections. Identifies: exact location of cable faults (breaks, short circuits, crimping errors) by measuring time for reflection to return. Distance to fault is calculated from the time measurement and signal propagation speed. Found in higher-end cable testers (certification testers like Fluke Networks).'
  },
  {
    id: 444, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'When a network printer cannot be found by any workstation, what should you check?',
    back: '1. Can you ping the printer\'s IP? If no: verify printer is on, check IP config on printer (could have changed via DHCP), try releasing/renewing printer\'s IP, reserve IP in DHCP. 2. If pingable but not printing: check print queue (stuck jobs?), printer drivers on workstation, printer share name hasn\'t changed. 3. Check firewall on printer or between printer\'s subnet and workstations.'
  },
  {
    id: 445, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'hard',
    front: 'What is the purpose of the PoE power budget on a switch?',
    back: 'The maximum total power (in watts) a PoE switch can deliver to all connected powered devices (PDs) simultaneously. Example: a 24-port switch may have 370W budget. If all connected devices draw more than 370W combined, some won\'t receive power. Solution: calculate total device power needs, use higher-budget switch, or use a PoE injector for devices beyond budget.'
  },
  {
    id: 446, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    front: 'What is the first step when you see an unfamiliar error during troubleshooting?',
    back: 'Write down or photograph the exact error message, error code, and any associated information. Then: search for the exact error text/code in documentation or online knowledge bases. The exact wording often leads directly to the known cause and solution. Paraphrasing loses critical details that differentiate between similar but different errors.'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CORE 2 — DOMAIN 1: OPERATING SYSTEMS
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 501, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What are the main Windows 10/11 editions?',
    back: 'Home: basic features, no Group Policy editor, no Remote Desktop host, no BitLocker (Win 10), no domain join. Pro: adds BitLocker, Group Policy (gpedit.msc), Remote Desktop host, Hyper-V, domain join. Enterprise: adds AppLocker, DirectAccess, long-term servicing. Education: similar to Enterprise for schools.'
  },
  {
    id: 502, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What features require Windows Pro or higher?',
    back: 'BitLocker (full-disk encryption), Remote Desktop host (can connect to it), Group Policy editor (gpedit.msc), joining an Active Directory domain, Hyper-V hypervisor, Windows Sandbox, Assigned Access, AppLocker (Enterprise). Windows Home can use Remote Desktop as a client (connecting OUT) but not as a host.'
  },
  {
    id: 503, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is NTFS and what features does it support?',
    back: 'New Technology File System — default for Windows system drives. Supports: file/folder permissions (ACLs), EFS encryption, compression, journaling (crash recovery), files > 4 GB, symbolic links, file ownership, auditing, shadow copies. Required for BitLocker, EFS, and NTFS permissions. Not natively readable by macOS (read-only without third-party software).'
  },
  {
    id: 504, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is the main limitation of FAT32?',
    back: 'Maximum individual file size: 4 GB. Maximum volume size: 32 GB (Windows format limit; spec supports 2 TB). No built-in security (no file permissions), no journaling, no encryption. Cross-platform compatible (Windows, macOS, Linux, cameras, game consoles). Use exFAT or NTFS when FAT32 limitations are hit.'
  },
  {
    id: 505, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is exFAT and when is it used?',
    back: 'Extended FAT — handles files > 4 GB without full NTFS overhead. Supports large volumes (up to 128 PB theoretically). Compatible with Windows, macOS, and Linux (with drivers). Used on: USB flash drives, SD cards, external drives needing cross-platform compatibility. Preferred over FAT32 for modern external media. No permissions or journaling.'
  },
  {
    id: 506, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What command checks and repairs file system errors in Windows?',
    back: 'chkdsk (Check Disk). chkdsk C: = read-only scan. chkdsk C: /f = fix file system errors. chkdsk C: /r = locate bad sectors and recover readable data (implies /f). System drive requires a reboot to run (scheduled for next startup). Results in Event Viewer → Windows Logs → Application, Source: Wininit.'
  },
  {
    id: 507, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What does sfc /scannow do?',
    back: 'System File Checker — scans all protected Windows system files and replaces corrupted/missing ones from a cached copy. Must run as Administrator. Results logged to %WinDir%\\Logs\\CBS\\CBS.log. If SFC cannot fix files, run DISM first to repair the Windows image, then run SFC again.'
  },
  {
    id: 508, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is DISM and when is it used?',
    back: 'Deployment Image Servicing and Management — repairs the Windows component store (the source SFC uses). Key command: DISM /Online /Cleanup-Image /RestoreHealth (downloads fixes from Windows Update). Run DISM before SFC when SFC reports it cannot repair files. Also used to service WIM/ISO images offline, add/remove Windows features, and mount images.'
  },
  {
    id: 509, exam: 'core2', domain: 'os', difficulty: 'hard',
    front: 'What is the Windows Registry and what are its 5 root keys?',
    back: 'Hierarchical database storing OS, hardware, and application settings. Root keys: HKEY_LOCAL_MACHINE (HKLM) — hardware and system-wide settings. HKEY_CURRENT_USER (HKCU) — logged-in user settings. HKEY_CLASSES_ROOT (HKCR) — file type associations. HKEY_USERS (HKU) — all user profiles. HKEY_CURRENT_CONFIG (HKCC) — current hardware profile. Edit with regedit.exe (always back up before changes).'
  },
  {
    id: 510, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is msconfig (System Configuration) used for?',
    back: 'Configure boot options (Safe Mode, number of processors, max memory), manage startup services (General tab for diagnostic/selective startup), and launch tools. In Windows 8+, startup programs moved to Task Manager Startup tab. Still essential for: enabling Safe Mode without F8, configuring boot logging, and switching to diagnostic startup to isolate software conflicts.'
  },
  {
    id: 511, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What does msinfo32 show?',
    back: 'System Information utility — shows OS version/build, system manufacturer/model, processor, installed RAM, BIOS version/date. Components section: display adapter, sound devices, network adapters. Software Environment: drivers, running tasks, startup programs, print jobs, network connections. Useful for gathering specs without opening case. Access: Win+R → msinfo32.'
  },
  {
    id: 512, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What does Windows Task Manager show and how do you open it?',
    back: 'Processes tab: running apps and background processes with CPU/RAM/Disk/Network usage. Performance tab: real-time graphs. App History tab: resource usage over time. Startup tab: programs that launch at login (enable/disable here). Services tab: running services. Users tab: logged-in users and their resource usage. Open: Ctrl+Alt+Delete → Task Manager, or Ctrl+Shift+Esc, or right-click taskbar.'
  },
  {
    id: 513, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What are essential Windows command-line file management commands?',
    back: 'dir = list directory contents. cd = change directory (cd.. = up, cd\\ = root). md / mkdir = create folder. rd / rmdir = remove empty folder (rd /s = remove with contents). del = delete file. copy = copy file. xcopy = copy folders/trees. robocopy = advanced copy with retry and mirror. ren = rename. move = move file/folder. type = display text file contents.'
  },
  {
    id: 514, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What does robocopy do and how does it differ from xcopy?',
    back: 'Robust File Copy: retries on network failure, copies NTFS permissions/timestamps/attributes, supports mirroring (/MIR = mirror source to destination, deleting extras), can resume interrupted transfers, excludes files/folders, logging. xcopy: simpler multi-file copy, no retry/resume, cannot mirror. robocopy is preferred for backup scripts and large transfers. Included in Windows Vista+.'
  },
  {
    id: 515, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is diskpart and what can it do?',
    back: 'Command-line disk partitioning tool. Workflow: diskpart → list disk → select disk N → list partition → select partition N → [action]. Actions: create partition primary, delete partition, format fs=ntfs quick, assign letter=D, extend (grow volume), shrink (reduce volume), clean (wipe all data), convert gpt/mbr. More powerful than Disk Management GUI, required for some operations (e.g., marking partition active).'
  },
  {
    id: 516, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is the difference between MBR and GPT partitioning?',
    back: 'MBR (Master Boot Record): max 2 TB disk, max 4 primary partitions (or 3 primary + 1 extended with logical partitions), supported by legacy BIOS. GPT (GUID Partition Table): supports disks > 2 TB, up to 128 primary partitions on Windows, required for UEFI boot, stores partition table redundantly at start and end of disk, includes CRC error checking. Modern systems should use GPT.'
  },
  {
    id: 517, exam: 'core2', domain: 'os', difficulty: 'hard',
    front: 'What is the Windows UEFI boot process?',
    back: 'Power on → UEFI firmware runs POST → UEFI reads EFI System Partition (ESP) for boot entries → loads Windows Boot Manager (bootmgfw.efi) → Boot Manager reads Boot Configuration Data (BCD) → loads Windows Boot Loader (winload.efi) → loads kernel (ntoskrnl.exe) → loads HAL (hal.dll) and system drivers → Session Manager (smss.exe) → Winlogon → Login screen.'
  },
  {
    id: 518, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What are the Safe Mode options in Windows and how do you access them?',
    back: 'Safe Mode: minimal drivers only (generic VGA, basic keyboard/mouse/disk). Safe Mode with Networking: adds network drivers/services for internet access. Safe Mode with Command Prompt: command line instead of Explorer. Access: Shift+Restart → Troubleshoot → Advanced Options → Startup Settings → Restart → F4/F5/F6. Or msconfig Boot tab → Safe boot checkbox (remember to uncheck after!). Or bcdedit for permanent setting.'
  },
  {
    id: 519, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is the Windows Event Viewer and what logs does it contain?',
    back: 'Centralized log viewer for Windows events. Key logs under Windows Logs: Application (app errors/crashes), System (OS/driver events, startup/shutdown), Security (login successes/failures, audit events — requires audit policy). Custom Views: create filtered views. Access: eventvwr.msc. Event levels: Critical, Error, Warning, Information, Verbose. Indispensable for diagnosing crashes and failures.'
  },
  {
    id: 520, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What are gpupdate and gpresult commands?',
    back: 'gpupdate: applies Group Policy settings immediately (normally applied at startup/logon or every 90 minutes). gpupdate /force: re-applies all policies even if not changed. gpresult /r: shows which GPOs are applied to current user and computer in a summary. gpresult /h C:\\result.html: full HTML report of applied policies, including settings. Requires Admin for computer policy results.'
  },
  {
    id: 521, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is the difference between a workgroup and a domain?',
    back: 'Workgroup (peer-to-peer): no central authentication, each PC manages its own user accounts, practical for < 10 PCs, no central policy enforcement, simple setup. Domain (client-server): centralized authentication via Active Directory Domain Controller, single sign-on with domain credentials, Group Policy controls all machines, centralized management — required for enterprise environments.'
  },
  {
    id: 522, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is Disk Management (diskmgmt.msc)?',
    back: 'GUI tool for disk and partition management: initialize new disks, create/delete/format partitions, extend or shrink volumes, change drive letters/paths, convert basic disk to dynamic, mark partition as active. Graphically shows all disks, their partition layout, and available space. For operations Disk Management cannot perform (e.g., convert to GPT with data), use diskpart.'
  },
  {
    id: 523, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is BitLocker and what does it require?',
    back: 'Full-disk encryption built into Windows Pro/Enterprise/Education. Encrypts entire volume including OS — protects data if drive is physically removed. Requirements: TPM 1.2 or 2.0 chip on motherboard (or USB startup key as alternative), UEFI/GPT recommended. Recovery key must be saved before enabling (to Microsoft account, USB, or printed). Manage via Control Panel → BitLocker Drive Encryption.'
  },
  {
    id: 524, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is EFS (Encrypting File System)?',
    back: 'File/folder-level encryption built into NTFS — encrypts individual files with the user\'s certificate. Only that user (and a designated Recovery Agent) can decrypt. Unlike BitLocker (full-disk), EFS protects specific files even when another user logs into the same OS. Critical: if the user certificate is lost (reinstall, profile corruption), encrypted files are permanently inaccessible. EFS and BitLocker are complementary.'
  },
  {
    id: 525, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is Windows Remote Desktop and what port does it use?',
    back: 'Allows graphical remote control of a Windows PC using RDP (Remote Desktop Protocol). Port: 3389 TCP. Host requirements: Windows Pro/Enterprise (Home cannot be a host). Enable via: System Properties → Remote tab → "Allow remote connections." Secured with Network Level Authentication (NLA). Default: only one concurrent remote session on non-Server Windows.'
  },
  {
    id: 526, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is the difference between Remote Desktop and Remote Assistance?',
    back: 'Remote Desktop: takes full control of a session; if someone is logged in locally they get disconnected (single-user). Remote Assistance (Quick Assist in Win 10/11): the user\'s session is shared — both parties see the screen simultaneously; helper needs an invitation or code. Remote Assistance designed for support scenarios where the user stays present. Both use RDP protocol (port 3389).'
  },
  {
    id: 527, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What are essential Linux file management commands?',
    back: 'ls = list files (ls -la = long format with hidden files). cd = change directory. cp = copy (cp -r = recursive). mv = move or rename. rm = remove (rm -rf = recursive force). mkdir = create directory. pwd = print working directory. cat = display file contents. less = page through file. grep = search text in files. find = search for files. chmod = change permissions. chown = change ownership.'
  },
  {
    id: 528, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What are Linux file permissions and the chmod command?',
    back: 'Permissions: rwx (read/write/execute) applied to owner, group, others. Displayed as: -rwxr-xr-- (file type, owner perms, group perms, others perms). Numeric (octal): r=4, w=2, x=1. chmod 755 = owner rwx (7), group r-x (5), others r-x (5). chmod 644 = owner rw- (6), group r-- (4), others r-- (4). chmod +x file = add execute for all. chown user:group file = change owner.'
  },
  {
    id: 529, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is sudo in Linux?',
    back: '"Superuser Do" — executes a single command with root (administrator) privileges. sudo command = run as root. sudo -i or su - = open root shell session. Root access is controlled by the /etc/sudoers file. Best practice: never log in as root normally; use sudo only when necessary to limit exposure. sudo logs all commands run for auditing.'
  },
  {
    id: 530, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What are Linux package management commands?',
    back: 'Debian/Ubuntu (APT): apt install pkg, apt remove pkg, apt update (refresh list), apt upgrade (upgrade all). Fedora/RHEL (DNF/YUM): dnf install pkg, dnf remove pkg, dnf update. openSUSE (Zypper): zypper install pkg. Lower-level: dpkg (Debian), rpm (RedHat) — install/remove individual package files. Package managers resolve dependencies automatically; dpkg/rpm do not.'
  },
  {
    id: 531, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is macOS Time Machine?',
    back: 'Built-in macOS backup software. Creates hourly backups for last 24 hours, daily backups for last month, weekly backups until drive is full. Backs up to external USB/Thunderbolt drive or network-attached Time Capsule/NAS. Incremental after initial full backup. Allows browsing and restoring individual files from any backup point. Configure in System Settings → General → Time Machine.'
  },
  {
    id: 532, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is FileVault in macOS?',
    back: 'Full-disk encryption for macOS (equivalent to BitLocker). Encrypts entire startup disk using XTS-AES-128 encryption. On Apple Silicon Macs, encryption is always on. Recovery key must be saved (to Apple ID or as personal recovery key) before enabling — losing both means data is unrecoverable. Enabled in System Settings → Privacy & Security → FileVault.'
  },
  {
    id: 533, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What Linux commands show network configuration?',
    back: 'ip addr (or ip a): shows interfaces and IP addresses (modern replacement for ifconfig). ip route: shows routing table. ip link: shows link-layer info. ifconfig: legacy command (deprecated but still available on many systems). nmcli: NetworkManager command-line. cat /etc/resolv.conf: shows DNS servers. /etc/hosts: local DNS overrides. ping, traceroute, ss (socket statistics) also essential.'
  },
  {
    id: 534, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is the Windows Performance Monitor?',
    back: 'Tracks performance counters over time (CPU %, available RAM, disk I/O, network throughput, and hundreds more). Create Data Collector Sets for long-term logging. Real-time view with custom counter graphs. Access: perfmon.msc. Used for: identifying bottlenecks, capacity planning, diagnosing intermittent performance issues, comparing baseline vs current performance. Requires Administrator.'
  },
  {
    id: 535, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is the Windows pagefile (virtual memory)?',
    back: 'pagefile.sys on the system drive acts as overflow RAM — when physical RAM is full, Windows pages out least-used memory to disk (much slower: RAM ~50 GB/s, SSD ~3 GB/s, HDD ~150 MB/s). Default size: managed automatically (typically 1x-3x RAM). Signs of insufficient RAM+pagefile: "Your computer is low on memory," excessive disk thrashing. Adjust in: System Properties → Advanced → Performance Settings → Advanced → Virtual Memory.'
  },
  {
    id: 536, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What does ipconfig /flushdns do and when is it needed?',
    back: 'Clears the local DNS resolver cache — the stored list of hostname-to-IP mappings from previous lookups. Use when: a server or website changed its IP address but the old address is cached, causing connection failure. Also clears failed (NXDOMAIN) lookups. DNS cache entries are stored with a TTL set by the DNS server; flushing forces a fresh lookup.'
  },
  {
    id: 537, exam: 'core2', domain: 'os', difficulty: 'hard',
    front: 'What is the Windows Sysinternals suite?',
    back: 'Free Microsoft tools for advanced Windows administration and troubleshooting. Key utilities: Process Explorer — detailed process tree, parent-child relationships, VirusTotal integration. Autoruns — shows every program set to run at startup (most comprehensive). TCPView — live view of all TCP/UDP connections. Process Monitor — real-time file, registry, and process activity. PsExec — run commands remotely. Available at learn.microsoft.com/sysinternals.'
  },
  {
    id: 538, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is System Restore in Windows?',
    back: 'Creates snapshots (restore points) of system state: registry, system files, installed programs. Does NOT back up personal data files. Can revert system to a working state before a bad driver update, software install, or settings change. Restore points created automatically before updates and installs (if enough disk space). Access: rstrui.exe. Disable temporarily during malware removal to prevent reinfection from infected restore points.'
  },
  {
    id: 539, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is the convert command in Windows?',
    back: 'Converts a FAT or FAT32 volume to NTFS non-destructively (preserves data). Syntax: convert D: /fs:ntfs. One-way conversion — cannot convert NTFS back to FAT without reformatting. The system drive (C:) conversion is scheduled for the next reboot. Use case: adding a drive that was formatted as FAT32 and needing NTFS permissions or EFS encryption.'
  },
  {
    id: 540, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What are the differences between 32-bit and 64-bit Windows?',
    back: '32-bit (x86): max ~4 GB RAM addressable (practical ~3.2 GB). 64-bit (x64): supports up to 128 GB+ RAM (varies by edition/hardware). 64-bit Windows runs 32-bit apps via WOW64 subsystem. 32-bit Windows cannot run 64-bit applications. 64-bit offers better security (DEP, ASLR more effective, kernel patch protection). Modern hardware and Windows installs should always be 64-bit.'
  },
  {
    id: 541, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is Windows Task Scheduler?',
    back: 'Automates tasks based on time schedules or event triggers (logon, startup, idle, event log entry). Access: taskschd.msc. Used by Windows for maintenance (disk defrag, backups, updates) and by applications. Security note: malware commonly uses Task Scheduler for persistence — check for unknown scheduled tasks during malware investigations. View all tasks including hidden ones under Task Scheduler Library.'
  },
  {
    id: 542, exam: 'core2', domain: 'os', difficulty: 'easy',
    front: 'What is the Windows command prompt vs PowerShell?',
    back: 'Command Prompt (cmd.exe): legacy, runs .bat/.cmd scripts, limited to text output, traditional commands. PowerShell: modern shell, object-oriented pipeline, .ps1 scripts, full .NET access, cmdlets (Verb-Noun format), can run CMD commands. PowerShell is preferred for automation and admin tasks. Windows Terminal: modern terminal app that hosts both. Access: Win+X → Windows Terminal (Admin).'
  },
  {
    id: 543, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is Windows Subsystem for Linux (WSL)?',
    back: 'Runs a Linux environment natively on Windows without a full VM. WSL 2 uses a real Linux kernel in a lightweight utility VM. Install: wsl --install (Windows 10 1903+, requires restart). Install specific distros: wsl --install -d Ubuntu. Access Linux files from Windows Explorer (\\\\wsl$\\) and Windows files from Linux (/mnt/c/). Use cases: development tools, bash scripts, Linux-only utilities.'
  },
  {
    id: 544, exam: 'core2', domain: 'os', difficulty: 'medium',
    front: 'What is the Windows netstat command?',
    back: 'Shows network connections and listening ports. netstat -a: all connections and listening ports. netstat -n: shows numeric IPs instead of hostnames (faster). netstat -b: shows executable responsible for each connection (Admin required). netstat -an: combine flags. Common use: find what process is listening on a port, detect suspicious connections, verify a service is running. Modern alternative: ss command (Linux) or TCPView (Windows GUI).'
  },
  {
    id: 545, exam: 'core2', domain: 'os', difficulty: 'hard',
    front: 'What is the Windows boot configuration and the bcdedit command?',
    back: 'Boot Configuration Data (BCD): database of boot options (replaces boot.ini from Windows XP). bcdedit: command-line editor for BCD. Common uses: bcdedit /set safeboot minimal (set Safe Mode), bcdedit /deletevalue safeboot (remove Safe Mode), bcdedit /copy {current} /d "Test Boot" (create boot entry copy). Requires Admin. Incorrectly editing BCD can prevent Windows from booting — export backup first: bcdedit /export C:\\BCDbackup.'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CORE 2 — DOMAIN 2: SECURITY
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 601, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is the difference between a virus and a worm?',
    back: 'Virus: requires a host file or program to attach to; does not spread on its own — propagates when the infected file is executed or shared by a user. Worm: self-replicating malware that spreads independently across networks by exploiting vulnerabilities, without user action. Both are malware; the key difference is propagation method — viruses need a host, worms spread autonomously.'
  },
  {
    id: 602, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is a Trojan horse in cybersecurity?',
    back: 'Malware disguised as legitimate or desirable software. Unlike viruses/worms, Trojans do not self-replicate. User is tricked into installing/running the "legitimate" program, which then executes the malicious payload. Payloads include: backdoors, keyloggers, ransomware downloaders, RATs (Remote Access Trojans). Named after the Greek myth. Defense: only install software from trusted sources.'
  },
  {
    id: 603, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is ransomware and how does it work?',
    back: 'Malware that encrypts victim files and demands payment (usually cryptocurrency) for the decryption key. Distribution: phishing emails, drive-by downloads, RDP brute force, exploited vulnerabilities. Examples: WannaCry, CryptoLocker, REvil. Defense: offline/airgapped backups (3-2-1 rule), keep systems patched, user awareness training, principle of least privilege. Paying ransom is not recommended — no guarantee of key.'
  },
  {
    id: 604, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is a keylogger?',
    back: 'Records every keystroke to capture passwords, PINs, credit card numbers, and other sensitive data. Software keylogger: installed as malware, transmits captured data to attacker. Hardware keylogger: physical device inserted between keyboard and PC (USB or PS/2 connector) — requires physical access. Detection: anti-malware scanning (software), physical inspection of ports (hardware). Mitigation: MFA, virtual on-screen keyboards.'
  },
  {
    id: 605, exam: 'core2', domain: 'security', difficulty: 'hard',
    front: 'What is a rootkit?',
    back: 'Malware designed to gain and maintain privileged (root/admin) access to a system while actively hiding its presence from the OS, security tools, and administrators. Extremely difficult to detect because it runs at or below the OS level, can intercept system calls, hide files and processes. Removal: often requires a bootable offline scanner (Windows Defender Offline, Kaspersky Rescue Disk) or complete OS reinstall. Bootkits infect the boot sector.'
  },
  {
    id: 606, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is spyware and what does it do?',
    back: 'Malware that covertly monitors user activity without consent: tracks browsing habits, collects personal data, logs keystrokes, captures screenshots, exfiltrates credentials. Often bundled with "free" software (PUPs — Potentially Unwanted Programs). Signs: slow browser, unexpected pop-ups, changed homepage/search engine, unknown toolbars. Removal: Malwarebytes, AdwCleaner. Prevention: careful software download habits, ad blockers.'
  },
  {
    id: 607, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is a botnet and what is a C&C server?',
    back: 'Botnet: network of malware-infected computers (bots/zombies) under centralized attacker control. C&C (Command and Control) server: the attacker\'s server that issues commands to all bots. Botnets used for: spam campaigns, DDoS attacks, credential stuffing, cryptocurrency mining, spreading more malware. Infected machines may show no obvious symptoms. Detection: unusual outbound network traffic, IDS alerts.'
  },
  {
    id: 608, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is phishing and what are its indicators?',
    back: 'Social engineering attack using fraudulent emails/websites appearing to come from legitimate sources (banks, IT help desk, executives) to steal credentials or deliver malware. Indicators: sender domain doesn\'t match legitimate organization (paypa1.com vs paypal.com), sense of urgency or threats, generic greetings ("Dear Customer"), suspicious links (hover to check URL), unexpected attachments, grammar/spelling errors. Defense: user training, spam filtering, MFA.'
  },
  {
    id: 609, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is spear phishing vs. whaling?',
    back: 'Spear phishing: targeted phishing attack against a specific individual or organization using personalized details (victim\'s name, employer, colleagues, recent activities) gathered via OSINT — much more convincing than generic phishing. Whaling: spear phishing targeting high-value executives (CEO, CFO, CISO) for large financial fraud or data theft. Business Email Compromise (BEC) is a common whaling technique. Same defenses, higher stakes.'
  },
  {
    id: 610, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is vishing? What is smishing?',
    back: 'Vishing (voice phishing): phone calls or VoIP used to trick victims into revealing sensitive information. Attacker impersonates IT support, bank, IRS, or tech support. Creates urgency ("your account will be closed"). Smishing (SMS phishing): fraudulent text messages with malicious links or requests for sensitive data, posing as delivery notifications, banks, or prize alerts. Both exploit trust and urgency. Defense: verify caller identity through official channels.'
  },
  {
    id: 611, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is tailgating/piggybacking?',
    back: 'Physical security breach where an unauthorized person gains access to a restricted area by following closely behind an authorized person through a secured door. Tailgating: the authorized person is unaware. Piggybacking: the authorized person knowingly allows it (both are security violations). Mitigations: mantraps/access control vestibules, security awareness training, challenging unknown individuals politely, turnstiles.'
  },
  {
    id: 612, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is shoulder surfing and dumpster diving?',
    back: 'Shoulder surfing: observing a person\'s screen or keyboard to steal PINs, passwords, or sensitive data. Can occur in person or via camera. Mitigations: privacy screens, screen positioning awareness, locking screen when unattended. Dumpster diving: searching discarded materials for useful information (printed documents, old hardware, sticky notes with passwords). Mitigations: shredding all documents, proper hardware disposal, clean desk policy.'
  },
  {
    id: 613, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What are the three factors of authentication?',
    back: 'Factor 1 — Something you KNOW: password, PIN, passphrase, security question answer. Factor 2 — Something you HAVE: smart card, hardware token (RSA SecurID), authenticator app (TOTP), physical key, badge. Factor 3 — Something you ARE: biometrics — fingerprint, facial recognition, iris scan, voice recognition, hand geometry. MFA = two or more factors. 2FA = exactly two. Using two of the same factor type is NOT true MFA.'
  },
  {
    id: 614, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is the principle of least privilege?',
    back: 'Users, processes, and systems should be granted the minimum permissions necessary to perform their intended function — nothing more. Reduces attack surface: a compromised low-privilege account causes limited damage. Implementation: separate admin and daily-use accounts (even for IT staff), role-based access control (RBAC), regular access reviews to remove unnecessary permissions, just-in-time (JIT) access for admin tasks.'
  },
  {
    id: 615, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is the difference between symmetric and asymmetric encryption?',
    back: 'Symmetric: same key used for both encryption and decryption (AES, DES, 3DES). Fast, efficient for large data. Challenge: how to securely share the key. Asymmetric: key pair — public key (freely shared) encrypts, private key (kept secret) decrypts (RSA, ECC). Solves key distribution problem. Much slower — used for key exchange and digital signatures, not bulk data. TLS uses asymmetric to exchange a symmetric session key.'
  },
  {
    id: 616, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is AES encryption?',
    back: 'Advanced Encryption Standard — symmetric block cipher. Block size: 128 bits. Key sizes: 128, 192, or 256 bits (AES-128, AES-192, AES-256). Replaced DES (56-bit, broken) and 3DES (112-bit effective, slow). AES-256 considered unbreakable with current computing. Used in: WPA2/WPA3 wireless, BitLocker, TLS, IPsec VPNs, file encryption. Hardware acceleration (AES-NI instructions) makes it extremely fast on modern CPUs.'
  },
  {
    id: 617, exam: 'core2', domain: 'security', difficulty: 'hard',
    front: 'What is PKI and what is a digital certificate?',
    back: 'PKI (Public Key Infrastructure): framework of policies, procedures, and technology for managing digital certificates and public/private key pairs. Digital certificate: electronic document (X.509 format) that binds a public key to an identity, signed by a Certificate Authority (CA). Chain of trust: Root CA → Intermediate CA → End-entity certificate. Certificates include: subject name, public key, validity period, issuer signature, serial number.'
  },
  {
    id: 618, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is TLS/SSL and what does it provide?',
    back: 'TLS (Transport Layer Security), successor to SSL. Provides: Confidentiality (encrypts data in transit), Authentication (server certificate proves identity), Integrity (MAC prevents tampering). Used by HTTPS (443), SMTPS (465/587), IMAPS (993), FTPS (990). Current versions: TLS 1.2 and 1.3. Deprecated: SSL 2.0/3.0, TLS 1.0/1.1 (disabled in modern browsers). TLS 1.3 removes weak algorithms and speeds up handshake.'
  },
  {
    id: 619, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is WPA2 vs WPA3 wireless security?',
    back: 'WPA2: uses CCMP/AES encryption (strong); PSK mode vulnerable to offline dictionary attacks if password is weak; KRACK vulnerability (patched). WPA3-Personal: uses SAE (Simultaneous Authentication of Equals / Dragonfly handshake) — eliminates offline dictionary attacks even with weak passwords; provides forward secrecy. WPA3-Enterprise: uses 192-bit security suite. WPA3 required for Wi-Fi 6 (802.11ax) certification.'
  },
  {
    id: 620, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is a VPN and what types exist?',
    back: 'Virtual Private Network: encrypts traffic between a client and VPN server to create a secure tunnel over a public network. Types: Remote access VPN (user to network), Site-to-site VPN (network to network — replaces WAN links). Protocols: IPsec (network layer, fast), SSL/TLS VPN (browser-based or client, port 443 — crosses firewalls easily), WireGuard (modern, fast). Split tunneling: only specific traffic routes through VPN; all traffic = full-tunnel.'
  },
  {
    id: 621, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What types of firewalls exist?',
    back: 'Packet filtering (stateless): checks headers only (IP, port) against rules — no state awareness, fast, basic. Stateful inspection: tracks connection state — knows a reply packet belongs to an allowed session. Application-layer/proxy: deep packet inspection, understands HTTP/FTP content. NGFW (Next-Generation Firewall): adds IPS, application identification, user identity, SSL inspection. Host-based: software firewall on individual endpoints (Windows Defender Firewall).'
  },
  {
    id: 622, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is the difference between IDS and IPS?',
    back: 'IDS (Intrusion Detection System): monitors network traffic or host activity, generates alerts for suspicious patterns — passive, does not block traffic. Risk: false negatives go unmitigated. IPS (Intrusion Prevention System): sits inline in the traffic path, can actively block/drop suspicious traffic in real time — active. Risk: false positives block legitimate traffic. Both use signature-based (known attacks) and anomaly-based (deviation from baseline) detection.'
  },
  {
    id: 623, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is a DMZ (Demilitarized Zone) in network security?',
    back: 'A separate network segment between the internal (trusted) network and the internet (untrusted). Contains publicly accessible servers: web servers, email servers, DNS, VPN gateways. Two-firewall DMZ: outer firewall separates internet from DMZ; inner firewall separates DMZ from internal LAN. If a DMZ server is compromised, the attacker still cannot directly reach the internal network — extra layer of isolation.'
  },
  {
    id: 624, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is data-at-rest vs. data-in-transit encryption?',
    back: 'Data-at-rest: stored data encrypted on disk — BitLocker (full disk), EFS (file-level), database encryption, encrypted backups. Protects against physical theft of drives. Data-in-transit: data moving over a network is encrypted — TLS/HTTPS, VPN, SSH, SFTP/FTPS. Protects against eavesdropping/MITM. Data-in-use: data being processed in RAM — harder to protect, addressed by hardware enclaves (Intel SGX). All three states require consideration.'
  },
  {
    id: 625, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is a TPM chip?',
    back: 'Trusted Platform Module: dedicated hardware security chip soldered to the motherboard. Functions: generates and stores cryptographic keys securely (keys never leave the chip), platform attestation (measures boot components to verify integrity), hardware random number generation, supports BitLocker and Windows Hello. TPM 2.0 required for Windows 11. Can be enabled/disabled in UEFI/BIOS settings.'
  },
  {
    id: 626, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is UAC (User Account Control)?',
    back: 'Windows security feature requiring user consent (standard users) or Admin confirmation before actions that require elevated privileges — even Admins run with standard user rights until elevation is needed. Prevents malware from silently making system changes. UAC prompt: "Do you want to allow this app to make changes to your device?" Four levels (Control Panel → User Accounts → Change UAC settings): always notify ↔ never notify.'
  },
  {
    id: 627, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is the difference between authentication and authorization?',
    back: 'Authentication (AuthN): verifying IDENTITY — proving you are who you claim (username + password, biometric, MFA). Authorization (AuthZ): verifying PERMISSIONS — what you are allowed to do after authentication (file permissions, ACLs, role-based access). Authentication must succeed before authorization is evaluated. Example: logging into Windows (AuthN) then being denied access to another user\'s folder (AuthZ).'
  },
  {
    id: 628, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What methods are used to destroy data on storage media?',
    back: 'Overwriting: software writes patterns (0s/1s) over existing data — NIST 800-88 single-pass for modern drives. Degaussing: strong magnetic field destroys data on HDDs/tapes (renders drive unusable). Shredding: physical destruction into small pieces. Incineration: burning. Crypto-erase (SSDs/self-encrypting drives): destroy the encryption key, making data unreadable. SSDs: overwriting is unreliable due to wear leveling — use crypto-erase or physical destruction.'
  },
  {
    id: 629, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is a mantrap (access control vestibule)?',
    back: 'Physical security control: a small room with two interlocking doors — the first door must fully close and lock before the second door can open. Prevents tailgating (only one person can enter per authentication event). Often combined with biometrics, badge readers, or cameras. Used in: data centers, server rooms, secure facilities. Also known as an airlock or portal.'
  },
  {
    id: 630, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is social engineering and why is it effective?',
    back: 'Manipulating people psychologically to divulge information or take actions that compromise security — exploiting human nature rather than technical vulnerabilities. Effective because it targets the weakest link: humans. Psychological triggers used: authority (impersonating IT/management), urgency ("your account will be suspended"), reciprocity, trust, fear, helpfulness. Defense: security awareness training, verification procedures, culture where "no" is acceptable.'
  },
  {
    id: 631, exam: 'core2', domain: 'security', difficulty: 'hard',
    front: 'What is a zero-day vulnerability?',
    back: 'A software vulnerability unknown to the vendor with no existing patch — "zero days" to patch before exploitation is possible. Attackers (nation-states, criminals) may discover and exploit zero-days silently before the vendor knows. High value, may be sold on dark web or held privately. Defense (can\'t patch the unknown): defense-in-depth, IPS with anomaly detection, network segmentation, least privilege, behavior-based AV.'
  },
  {
    id: 632, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is multi-factor authentication (MFA)?',
    back: 'Requires two or more different authentication factors (know/have/are) to verify identity. Significantly reduces account compromise risk — stolen password alone is insufficient. Common implementations: TOTP apps (Google Authenticator, Microsoft Authenticator, Authy), SMS codes (weakest MFA — vulnerable to SIM swapping), push notifications, hardware tokens (YubiKey), smart cards, biometrics. SMS codes are better than no MFA; app-based TOTP is better than SMS.'
  },
  {
    id: 633, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is WEP and why should it not be used?',
    back: 'Wired Equivalent Privacy — original 802.11 wireless security standard (1999). Uses RC4 cipher with a static key and a 24-bit IV (Initialization Vector). The short IV repeats frequently, allowing statistical analysis to recover the key in minutes with freely available tools (Aircrack-ng). WEP is completely broken. Never use WEP — minimum WPA2, preferred WPA3. Even WPA with TKIP is deprecated.'
  },
  {
    id: 634, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is the difference between WPA-Personal and WPA-Enterprise?',
    back: 'WPA/WPA2/WPA3-Personal: uses Pre-Shared Key (PSK) — same passphrase for all users. Simple setup, suitable for home/small office. Everyone with the key has access; revoking access requires changing key for everyone. WPA-Enterprise: uses 802.1X with a RADIUS authentication server — each user authenticates with their own credentials (username/password, certificate). Enables per-user access control, auditing, and easy revocation. Required in most corporate environments.'
  },
  {
    id: 635, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is 802.1X port-based Network Access Control?',
    back: 'IEEE standard enforcing authentication before a device gets network access. Three roles: Supplicant (client device), Authenticator (switch/WAP — acts as gatekeeper), Authentication Server (RADIUS server — validates credentials). Protocol: EAP (Extensible Authentication Protocol) carries credentials. Until authenticated, port only passes EAP traffic. Used in WPA-Enterprise wireless and wired network access control (NAC).'
  },
  {
    id: 636, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is defense in depth?',
    back: 'Security strategy using multiple independent layers so that failure of one layer does not compromise the entire system. Layers: Physical (locks, mantraps, cameras), Network (firewalls, IDS/IPS, VLAN segmentation), Host (antivirus, host firewall, OS patching), Application (secure coding, WAF, input validation), Data (encryption at rest and in transit), Human (training, policies, procedures). No single control is relied upon exclusively.'
  },
  {
    id: 637, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is BYOD and what security policies address it?',
    back: 'Bring Your Own Device: employees use personal devices for work. Risks: lost/stolen device exposes corporate data, mixing personal and work data, inconsistent patching, malware from personal use. Policies: MDM enrollment (Mobile Device Management — enforce encryption, remote wipe, passcode), containerization (separate work/personal apps), acceptable use policy, VPN requirement, minimum OS version requirement.'
  },
  {
    id: 638, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is an access control list (ACL)?',
    back: 'An ordered list specifying which users/groups/IPs have what access to a resource. NTFS file ACLs (DACLs): specify read/write/execute/modify/full control permissions per user or group. Network ACLs: on routers/firewalls, define permitted/denied traffic by source/destination IP and port. Windows permissions: explicit (set directly) vs inherited (from parent folder). Effective permissions = combination of all applicable ACE entries.'
  },
  {
    id: 639, exam: 'core2', domain: 'security', difficulty: 'hard',
    front: 'What is a supply chain attack?',
    back: 'Attack targeting a less-secure element in a software or hardware supply chain to compromise the eventual target. Examples: SolarWinds Orion (malicious code injected into software update, compromised 18,000+ organizations), counterfeit hardware with backdoors, malicious open-source packages (typosquatting). Defense: software integrity verification (signing), vendor risk assessment, software bill of materials (SBOM), network monitoring for unusual behavior after updates.'
  },
  {
    id: 640, exam: 'core2', domain: 'security', difficulty: 'easy',
    front: 'What is a honeypot?',
    back: 'A decoy system deliberately configured to appear attractive and vulnerable to attackers. Purpose: detect attacks early (triggers alert when accessed, since no legitimate user should touch it), study attacker techniques and tools, divert attackers from real production systems. Any access to a honeypot is suspicious by definition. Honeynet: multiple honeypots simulating an entire network. Legal and ethical setup required.'
  },
  {
    id: 641, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is the difference between full-disk encryption and file-level encryption?',
    back: 'Full-disk encryption (FDE): encrypts the entire drive including the OS, boot files, and all data — transparent after authentication at boot (BitLocker, FileVault, VeraCrypt). Best protection against physical theft. File-level encryption: encrypts specific files or folders (EFS, AxCrypt, encrypted ZIP). More granular — can share encrypted file across systems. FDE more comprehensive; file-level useful for specific sensitive files.'
  },
  {
    id: 642, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is Windows Defender Firewall and how is it configured?',
    back: 'Host-based (software) stateful firewall built into Windows. Three profiles: Domain (Active Directory network), Private (home/trusted network), Public (coffee shop/untrusted). Each profile has its own inbound/outbound rules. Configure: Control Panel → Windows Defender Firewall, or wf.msc (advanced rules). Allow an app through firewall, create custom port rules, manage rules per profile. Enabled by default on all three profiles.'
  },
  {
    id: 643, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is port security on a network switch?',
    back: 'Switch feature that limits which MAC addresses can communicate on a port. Can restrict to: a maximum number of MACs, or specific known MACs. Violation actions: Protect (silently drop frames from unknown MACs), Restrict (drop + increment violation counter + send SNMP trap), Shutdown (disable the port — requires manual re-enable or errdisable recovery). Prevents MAC flooding attacks and unauthorized device connections.'
  },
  {
    id: 644, exam: 'core2', domain: 'security', difficulty: 'hard',
    front: 'What is the difference between a vulnerability, a threat, and a risk?',
    back: 'Vulnerability: a weakness in a system (unpatched software, misconfiguration, weak password). Threat: a potential danger that could exploit a vulnerability (attacker, malware, natural disaster, human error). Risk: the probability that a threat will exploit a vulnerability × the impact if it does. Risk = Threat × Vulnerability × Impact. Security controls reduce risk by reducing vulnerability or impact. Cannot eliminate risk entirely — only manage it.'
  },
  {
    id: 645, exam: 'core2', domain: 'security', difficulty: 'medium',
    front: 'What is the incident response process and chain of custody?',
    back: 'Incident Response steps: Preparation → Identification → Containment → Eradication → Recovery → Lessons Learned. Chain of custody: documented proof of who handled evidence, when, and how — required for legal proceedings. Each handoff documented. Evidence collected with write blockers (forensic image, not live system). Tamper-evident packaging. Logs of all actions. Breaks in chain of custody can make evidence inadmissible in court.'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CORE 2 — DOMAIN 3: SOFTWARE TROUBLESHOOTING
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 701, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is a BSOD (Blue Screen of Death) and what information does it provide?',
    back: 'A Windows critical kernel error (Stop Error) causing system crash to protect hardware. Displays: stop code name (e.g., IRQL_NOT_LESS_OR_EQUAL), stop code number (0x0000000A), and optionally the faulting driver/file. Minidump files saved to C:\\Windows\\Minidump — analyze with WinDbg or NirSoft WhoCrashed. Common causes: bad driver, RAM failure, hardware malfunction, overclocking instability. Check Event Viewer for events logged before the crash.'
  },
  {
    id: 702, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'hard',
    front: 'What are common BSOD stop codes and their causes?',
    back: 'IRQL_NOT_LESS_OR_EQUAL (0xA): driver accessing invalid memory address — bad driver or RAM. PAGE_FAULT_IN_NONPAGED_AREA (0x50): driver/software accessing invalid memory — RAM failure or driver bug. MEMORY_MANAGEMENT (0x1A): RAM failure. UNEXPECTED_KERNEL_MODE_TRAP (0x7F): hardware failure. CRITICAL_PROCESS_DIED (0xEF): critical Windows process crashed. SYSTEM_SERVICE_EXCEPTION (0x3B): driver error. Analyze minidump to identify faulting driver.'
  },
  {
    id: 703, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you recover when Windows fails to boot?',
    back: '1. Startup Repair: Advanced Startup → Troubleshoot → Advanced Options → Startup Repair. 2. System Restore: revert to a previous restore point. 3. Uninstall Updates option (if update caused it). 4. Safe Mode: boot with minimal drivers, then diagnose. 5. Command Prompt: run bootrec /fixmbr, /fixboot, /rebuildbcd; or sfc /scannow; or diskpart. 6. Boot from Windows installation media for access to all repair tools. 7. Last resort: Reset this PC or full reinstall.'
  },
  {
    id: 704, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'hard',
    front: 'What are CompTIA\'s 7 steps of malware removal?',
    back: '1. Investigate and verify malware symptoms. 2. Quarantine the infected system (isolate from network). 3. Disable System Restore (prevents reinfection from infected restore points). 4. Remediate: scan and remove with anti-malware tools (use offline/bootable scanner to bypass rootkits). 5. Schedule scans and run updates. 6. Enable System Restore and create a new restore point. 7. Educate the end user (explain what happened, how to avoid recurrence).'
  },
  {
    id: 705, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What tools are used for malware removal?',
    back: 'Malwarebytes Anti-Malware (MBAM): popular removal tool, free tier available. Windows Defender Offline Scan: runs before Windows loads — bypasses rootkits hiding from live OS. Bootable AV media: Kaspersky Rescue Disk, Avira Rescue System — scan from completely outside Windows. Rkill: terminates malware processes so scanner can run. HitmanPro: cloud-based second-opinion scanner. Always use multiple tools — no single scanner catches everything.'
  },
  {
    id: 706, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is a browser hijacker and how is it removed?',
    back: 'Malware that modifies browser settings without permission: changes default search engine, homepage, installs unwanted extensions/toolbars, redirects searches to malicious or monetized sites. Removal: 1. Uninstall suspicious programs from Control Panel. 2. Remove unknown browser extensions. 3. Reset browser settings to defaults. 4. Run Malwarebytes and AdwCleaner. 5. Check startup programs (msconfig, Task Manager Startup tab) for unwanted entries. 6. Reset hosts file if modified.'
  },
  {
    id: 707, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    front: 'What is the difference between an application crash and "not responding"?',
    back: 'Crash: app terminates abnormally — access violation, unhandled exception, segmentation fault. Windows shows "has stopped working" and collects error data. Not Responding: process is still running but is not processing Windows messages — deadlock, infinite loop, waiting for a blocked resource, or doing intensive computation. For "not responding": wait briefly, then End Task in Task Manager. Crashes: check Event Viewer Application log for error details.'
  },
  {
    id: 708, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you troubleshoot a slow Windows computer?',
    back: '1. Task Manager: identify high CPU/RAM/Disk usage (Processes tab). 2. Disable startup programs (Task Manager Startup tab or msconfig). 3. Check for malware. 4. Run chkdsk and check SMART data (failing drive = slow I/O). 5. Check for overheating (thermal throttling). 6. Defragment HDD (NOT SSD). 7. Reduce visual effects (System Properties → Advanced → Performance Settings → Adjust for best performance). 8. Add RAM if frequently at 80%+ usage.'
  },
  {
    id: 709, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is a clean boot and how does it differ from Safe Mode?',
    back: 'Clean boot: starts Windows with only Microsoft services and no third-party startup items/services — configured via msconfig (Selective startup, disable all non-Microsoft services). Still loads actual hardware drivers. Used to isolate third-party software conflicts. Safe Mode: uses generic Microsoft drivers (VGA, basic disk, mouse) — loads even fewer components. Use Safe Mode for driver testing; use clean boot for software/service conflicts.'
  },
  {
    id: 710, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What does the Windows Reliability Monitor show?',
    back: 'A visual timeline of system stability with an overall stability index score (1-10). Shows: application crashes, Windows failures (BSOD), hardware failures, software installs/uninstalls, and Windows updates — all plotted on a calendar. Useful for correlating instability with recent changes (e.g., crash started after installing software on date X). Access: reliabilityhistory.exe or Control Panel → Security and Maintenance → Reliability History.'
  },
  {
    id: 711, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you fix a "missing DLL" error?',
    back: '"The program can\'t start because [file].dll is missing from your computer." Causes: partial uninstall removed a shared DLL, corrupted system file, or missing Visual C++ Redistributable/.NET Framework. Fix: 1. Run sfc /scannow (repairs Windows system DLLs). 2. Reinstall the affected application. 3. Install the required Visual C++ Redistributable or .NET Framework version. 4. Never download individual DLL files from third-party websites — frequent malware vector.'
  },
  {
    id: 712, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you troubleshoot a Windows service that won\'t start?',
    back: '1. Check Event Viewer System log for the service failure event and error code. 2. Check services.msc for service dependencies (Dependencies tab) — required services must be running first. 3. Verify the service account has correct permissions for its required files/registry keys. 4. Check if disk is full (some services fail with insufficient space). 5. Run sfc /scannow for corrupted system files. 6. Try starting manually in services.msc and note exact error message.'
  },
  {
    id: 713, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What does the bootrec command do?',
    back: 'Repairs the Windows boot environment from a command prompt (WinRE or installation media). bootrec /fixmbr: writes new Master Boot Record (fixes MBR corruption or overwritten MBR). bootrec /fixboot: writes new boot sector for the system partition. bootrec /scanos: scans all disks for Windows installations. bootrec /rebuildbcd: rebuilds the Boot Configuration Data store — adds all found Windows installs. Run from WinRE → Troubleshoot → Advanced Options → Command Prompt.'
  },
  {
    id: 714, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'hard',
    front: 'How do you fix a corrupted Windows user profile?',
    back: '1. Log in as a different administrator account. 2. Navigate to C:\\Users\\ and rename the corrupted profile folder (e.g., add .old). 3. In Registry Editor: HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\ProfileList — find and rename or delete the key for the corrupted profile (identified by SID). 4. Log in as the affected user — Windows creates a fresh profile. 5. Copy personal data from the renamed .old folder to the new profile. 6. Reinstall user-specific applications/settings.'
  },
  {
    id: 715, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you troubleshoot a failed Windows Update?',
    back: '1. Run Windows Update Troubleshooter (Settings → Update & Security → Troubleshoot). 2. Reset Windows Update components: net stop wuauserv, net stop bits, delete C:\\Windows\\SoftwareDistribution\\, restart services. 3. Run DISM /Online /Cleanup-Image /RestoreHealth. 4. Run sfc /scannow. 5. Check CBS.log (%WinDir%\\Logs\\CBS\\CBS.log) for specific error. 6. Manually download update from Microsoft Update Catalog. 7. Ensure sufficient disk space (updates need several GB free).'
  },
  {
    id: 716, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is macOS Recovery Mode and how do you enter it?',
    back: 'Bootable recovery environment for macOS diagnostics and repair. Enter: Apple Silicon — hold power button until "Loading startup options" appears → Options. Intel Mac — hold Cmd+R at startup. Tools available: Reinstall macOS, Restore from Time Machine Backup, Disk Utility (First Aid, Erase, Restore), Terminal, Startup Security Utility. Use for: OS reinstall, drive repair (fsck via Disk Utility First Aid), erasing before selling.'
  },
  {
    id: 717, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you show all running processes on Linux?',
    back: 'ps aux: shows all processes from all users with PID, CPU%, MEM%, command. top: real-time process monitor (interactive, press q to quit). htop: improved top — color-coded, sortable, easier to use. kill PID: send SIGTERM (graceful). kill -9 PID: send SIGKILL (force kill). pkill processname: kill by name. pgrep processname: find PID by name. systemctl status servicename: check a specific system service status.'
  },
  {
    id: 718, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you troubleshoot an Android app that keeps crashing?',
    back: '1. Force Stop: Settings → Apps → [App] → Force Stop. 2. Clear cache: Settings → Apps → [App] → Storage → Clear Cache. 3. Clear data (resets app to fresh install state, loses local data): same path → Clear Data. 4. Uninstall and reinstall the app. 5. Check for app updates in Play Store. 6. Check for Android OS updates. 7. If multiple apps crash: free storage space (insufficient storage causes crashes), scan for malware, consider factory reset.'
  },
  {
    id: 719, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is Windows "Reset this PC" and what options does it offer?',
    back: '"Reset this PC" (Settings → System → Recovery) reinstalls Windows from built-in recovery partition — no installation media needed. Two options: 1. Keep my files — removes third-party apps and settings, preserves personal files (Documents, Pictures, etc.). 2. Remove everything — complete wipe of apps, settings, and personal files (use before selling/donating). Cloud download option downloads fresh Windows image. Faster and easier than manual reinstall but doesn\'t fix corrupted recovery partition.'
  },
  {
    id: 720, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you roll back a driver in Windows?',
    back: 'Device Manager → find device → right-click → Properties → Driver tab → Roll Back Driver button. Reverts to the previously installed driver version. Useful when a new driver update causes BSODs, hardware malfunction, or performance issues. Roll Back is grayed out if no previous driver version is saved. Alternative: Uninstall Device (check "Delete the driver software for this device"), then manually install the older driver downloaded from the manufacturer\'s website.'
  },
  {
    id: 721, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    front: 'How do you identify a resource-hogging process in Task Manager?',
    back: 'Open Task Manager (Ctrl+Shift+Esc) → Processes tab: click column headers to sort by CPU, Memory, Disk, or Network descending. The top entry is the current highest consumer. For unknown processes: right-click → Open file location (verify it\'s in a legitimate location like C:\\Windows\\System32) or search the process name online. Details tab: shows more info and PID. Suspicious high CPU: check for cryptominers. Suspicious network: check with TCPView (Sysinternals).'
  },
  {
    id: 722, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What causes "low disk space" and how do you recover space?',
    back: 'C: drive near capacity. Recovery options: Disk Cleanup (cleanmgr.exe) — removes temp files, recycle bin, system files (run as Admin for system file cleanup). Storage Sense: automatic cleanup settings. Manual: empty Recycle Bin, clear %TEMP% and C:\\Windows\\Temp, uninstall unused applications, move large files to external drive. Big space consumers to check: Windows.old (previous Windows version, up to 30 GB), Hibernation file (powercfg /h off), Shadow Copies. WinDirStat: visualizes disk usage.'
  },
  {
    id: 723, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you troubleshoot Remote Desktop connection failures?',
    back: '1. Is RDP enabled? System Properties → Remote → "Allow remote connections to this computer." 2. Windows Firewall allowing port 3389? 3. Remote Desktop Services (TermService) running in services.msc? 4. User account in Remote Desktop Users group? 5. Correct hostname or IP address? 6. NLA required but client doesn\'t support it? 7. Network connectivity — can you ping the target? 8. Is someone else already connected (non-Server Windows allows only 1 concurrent session)?'
  },
  {
    id: 724, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you troubleshoot an application that won\'t install?',
    back: '1. Run installer as Administrator (right-click → Run as Administrator). 2. Check if .NET Framework or Visual C++ Redistributable is required (check documentation). 3. Sufficient disk space? 4. Windows Installer service running (services.msc)? 5. Is it a 32-bit installer on 64-bit OS? (usually fine, but check). 6. Review Event Viewer Application log for MSI installer errors (look for MsiInstaller events). 7. Perform clean boot to eliminate software conflicts. 8. Temporarily disable antivirus (it may block installer).'
  },
  {
    id: 725, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is the in-place upgrade method for Windows repair?',
    back: 'Running Windows setup over the existing installation without wiping. Preserves: personal files, installed applications, and user accounts. Repairs: corrupted system files, Registry issues, and broken Windows components. More thorough than sfc/DISM for deep corruption. Process: boot Windows normally → run setup.exe from Windows ISO → choose "Upgrade this PC now" → select "Keep personal files and apps." Takes ~1 hour. Requires matching or newer Windows version.'
  },
  {
    id: 726, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is Autoruns (Sysinternals) and why is it useful for malware troubleshooting?',
    back: 'Shows every program configured to run automatically at startup — more comprehensive than Task Manager or msconfig. Scans: HKLM and HKCU Run keys, Startup folders, services, scheduled tasks, browser extensions, Explorer shell extensions, Windows logon entries, and more. Highlights: unsigned entries (yellow), entries not on VirusTotal whitelist (red background with VirusTotal check enabled). Uncheck to disable without deleting; right-click → Delete to remove permanently.'
  },
  {
    id: 727, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'hard',
    front: 'What is application compatibility mode in Windows?',
    back: 'Allows older applications to run on newer Windows by simulating an older OS environment. Right-click the app\'s executable → Properties → Compatibility tab. Options: Run in compatibility mode for [Windows XP, Vista, 7, 8], Run as Administrator, Disable DPI Scaling, Reduce color mode, Run in 640x480. Windows Program Compatibility Troubleshooter can test settings automatically. Last resort for very old apps: run in a VM (Hyper-V, VirtualBox) with the original OS.'
  },
  {
    id: 728, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is the difference between antivirus quarantine and deletion?',
    back: 'Quarantine: moves the suspected malicious file to a secure, isolated location on disk — encrypted and prevented from executing, but not deleted. Allows recovery if it was a false positive. Deletion: permanently removes the file. CompTIA malware removal process recommends quarantine before deletion to allow analysis. If the detection is clearly malicious (known ransomware, trojan): delete. If uncertain: quarantine and research the detection name before deciding.'
  },
  {
    id: 729, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    front: 'What are the steps to fix "no audio" in Windows?',
    back: '1. Check physical connections (speakers/headphones). 2. Volume not muted in system tray. 3. Correct output device selected: right-click speaker icon → Open Sound Settings → select correct output device. 4. Update or reinstall audio driver in Device Manager (Sound, video and game controllers). 5. Restart Windows Audio service: services.msc → Windows Audio → Restart. 6. Run Audio Troubleshooter (Settings → Troubleshoot). 7. Check BIOS — onboard audio enabled?'
  },
  {
    id: 730, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you use msconfig for clean boot troubleshooting?',
    back: 'msconfig → General tab → Selective startup: uncheck "Load startup items." → Services tab → check "Hide all Microsoft services" → click "Disable all" (disables all third-party services). Restart. If problem resolved: re-enable services in groups of half to binary-search the culprit. Re-enable startup items in Task Manager Startup tab. After identifying culprit, either update/uninstall it or leave it disabled. Remember to return to "Normal startup" after troubleshooting.'
  },
  {
    id: 731, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you troubleshoot a Windows activation problem?',
    back: 'Check activation status: Settings → System → Activation or run slmgr /xpr (shows expiration or "permanently activated"). Common issues: product key not entered, wrong edition key, hardware change triggered re-activation (motherboard replacement). Fix: Settings → Activation → Troubleshoot (links hardware change to Microsoft account). For KMS activation: ensure VAMT/KMS server reachable. For retail: re-enter product key or contact Microsoft support if key already used on different PC.'
  },
  {
    id: 732, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    front: 'How do you troubleshoot network connectivity in Windows step by step?',
    back: '1. ipconfig — is a valid IP assigned or APIPA (169.254.x.x)? 2. ping 127.0.0.1 — loopback, tests TCP/IP stack. 3. ping [default gateway] — tests physical connectivity and routing. 4. ping 8.8.8.8 — tests internet connectivity without DNS. 5. ping google.com — tests DNS resolution. If step 5 works but websites don\'t load, check browser or proxy settings. Narrow down: each failed step tells you exactly which layer has the problem.'
  },
  {
    id: 733, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is Event ID 1000 in Windows Event Viewer?',
    back: 'Application Error — logged by Windows Error Reporting when an application crashes. Contains: faulting application name and version, faulting module name and version (the DLL/EXE that caused the crash), exception code (e.g., 0xc0000005 = access violation), fault offset. Use this information to: identify the specific software crashing, identify if a particular DLL is consistently the faulting module (suggests driver or framework issue), search Microsoft Knowledge Base for known issues.'
  },
  {
    id: 734, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is a driver signing issue in Windows?',
    back: 'Windows requires drivers to be digitally signed by Microsoft (WHQL certification) to ensure stability and security. Unsigned or improperly signed drivers may be blocked (64-bit Windows enforces this). Fix: obtain the official WHQL-signed driver from the manufacturer. For testing only: Advanced Startup → Startup Settings → Disable Driver Signature Enforcement (temporary, resets after restart). Use bcdedit /set testsigning on for development testing (leaves watermark on desktop).'
  },
  {
    id: 735, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'hard',
    front: 'What are the steps to remove a persistent rootkit?',
    back: '1. Boot from external bootable scanner (Kaspersky Rescue Disk, Windows Defender Offline) — rootkit cannot hide from external scanner. 2. If bootable scan fails: back up data, then perform clean OS reinstall (rootkits often survive in-place repair). 3. After reinstall: change all passwords (rootkit may have logged them). 4. Check MBR (bootrec /fixmbr from WinRE) for bootkits. 5. Consider firmware rootkits (UEFI malware) — update UEFI firmware, may require motherboard manufacturer support.'
  },
  {
    id: 736, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you diagnose and fix a Windows print spooler issue?',
    back: 'Print Spooler service manages print jobs. Symptoms: printer not printing, print queue stuck, can\'t add printer. Fix: 1. Open services.msc → Print Spooler → Stop. 2. Delete all files in C:\\Windows\\System32\\spool\\PRINTERS\\ (stuck jobs). 3. Start Print Spooler again. 4. If it won\'t start: check Event Viewer for dependency errors, run sfc /scannow. 5. Reinstall printer driver. 6. Use PrintManagement.msc for advanced management.'
  },
  {
    id: 737, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What causes a Windows application to show "Access Denied" errors?',
    back: 'Insufficient NTFS file/folder permissions for the user account running the application. Common causes: application needs to write to a protected location (C:\\Windows\\, C:\\Program Files\\) with a standard user account, misconfigured folder permissions, UAC blocking elevated action. Fix: run as Administrator (right-click → Run as Administrator), check folder permissions (Properties → Security), modify permissions if appropriate, or install app to user-writable location (AppData).'
  },
  {
    id: 738, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    front: 'What is the Windows Startup Repair tool?',
    back: 'Automated repair tool that scans and fixes common boot problems: missing or corrupted boot files, incorrect Boot Configuration Data, damaged startup files, driver failures preventing boot. Access: Advanced Startup Options → Troubleshoot → Advanced Options → Startup Repair. Also accessible from Windows installation media. Cannot fix hardware failures or deeply corrupted installs — if it fails, proceed to manual bootrec commands or full reinstall.'
  },
  {
    id: 739, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is the Windows Memory Diagnostic tool?',
    back: 'Built-in RAM testing tool (mdsched.exe). Schedules a memory test at next restart (runs before Windows loads, outside the OS). Standard test: 2 passes of basic tests. Extended test: more thorough (runs longer). Results appear in Event Viewer → Windows Logs → System after reboot (Source: MemoryDiagnostics-Results). For more thorough testing: use Memtest86 (bootable, independent, multiple passes, identifies exact failing address).'
  },
  {
    id: 740, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you troubleshoot a Windows PC that is overheating?',
    back: 'Symptoms: random shutdowns, throttling (sudden performance drop), hot chassis, loud fans. Steps: 1. Monitor temps (HWMonitor, HWiNFO64) — CPU > 95°C or GPU > 85°C under load is problematic. 2. Clean dust from heatsink, fans, and vents (compressed air). 3. Verify all fans are spinning. 4. Reseat CPU heatsink and replace thermal paste (dried paste = poor heat transfer). 5. Improve case airflow (cable management, intake/exhaust fan balance). 6. Check if thermal throttling in Task Manager (CPU frequency drops under load).'
  },
  {
    id: 741, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    front: 'How do you check if a Windows PC has malware using built-in tools?',
    back: '1. Windows Security (Defender Antivirus): open from system tray → Quick Scan or Full Scan. 2. Windows Defender Offline Scan: Windows Security → Virus & threat protection → Scan options → Microsoft Defender Offline scan (reboots and scans before OS loads). 3. Task Manager: look for unknown processes with high CPU/network. 4. Autoruns (Sysinternals): check all startup locations for unsigned/unknown entries. 5. TCPView: look for unknown outbound connections.'
  },
  {
    id: 742, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What does the Windows System Configuration (msconfig) Diagnostic Startup do?',
    back: 'Diagnostic startup loads only basic Windows services and drivers — similar to Safe Mode but uses actual drivers (not generic VGA). Disables all third-party services and startup programs. Use to determine if a problem is caused by third-party software or Windows itself. If problem is gone in Diagnostic startup: it\'s third-party software. Then switch to Selective startup and enable services/items in batches to narrow down the culprit.'
  },
  {
    id: 743, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'What is the Windows SFC and DISM repair order?',
    back: 'Correct order: 1. Run DISM /Online /Cleanup-Image /RestoreHealth FIRST — this repairs the Windows component store (the source that SFC uses). 2. Then run sfc /scannow — uses the now-healthy component store to replace corrupted system files. Reason: if SFC is run first on a corrupted component store, it may report "could not perform the requested operation" or "found corrupt files but could not fix them." DISM requires internet access to download repair files from Windows Update.'
  },
  {
    id: 744, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    front: 'How do you troubleshoot iOS sync and backup issues?',
    back: 'Common issues and fixes: Device not recognized by iTunes/Finder — try different USB cable/port, trust the computer on device prompt, update iTunes/macOS, reinstall Apple Mobile Device Support (Windows). Backup failing — insufficient iCloud storage (upgrade or manage storage), backup to computer instead. Apps not syncing — check Apple ID logged in, iCloud toggle for the app. Factory reset: Settings → General → Transfer or Reset iPhone → Erase All Content and Settings.'
  },
  {
    id: 745, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'hard',
    front: 'What is Process Monitor (Procmon) and when is it used?',
    back: 'Sysinternals Process Monitor: captures real-time file system, Registry, network, and process/thread activity. Every read/write/query operation is logged with: process name, PID, operation type, path, result (SUCCESS, ACCESS DENIED, NOT FOUND), timestamp, and call stack. Use for: diagnosing app crashes (find "ACCESS DENIED" or "NOT FOUND" entries), malware analysis (what files/registry keys does it touch?), missing DLL troubleshooting (find "NAME NOT FOUND" for DLL paths). Filter aggressively — generates thousands of events per second.'
  },

  // ─────────────────────────────────────────────────────────────────────────
  // CORE 2 — DOMAIN 4: OPERATIONAL PROCEDURES
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 801, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What are the three types of data backup and how do they differ?',
    back: 'Full: complete copy of all selected data — slowest to create, fastest to restore (single backup set). Differential: copies everything changed since the last FULL backup — grows larger daily, moderate restore speed (full + latest differential). Incremental: copies everything changed since the last backup of ANY type — smallest/fastest daily backup, slowest restore (requires full + every incremental in sequence). Full + differential is common; full + incremental saves most space.'
  },
  {
    id: 802, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is the 3-2-1 backup rule?',
    back: 'Keep 3 copies of data: 1 primary + 2 backups. Store on 2 different media types (e.g., internal drive + external HDD, or local NAS + cloud). Keep 1 copy offsite or in the cloud (protects against fire, flood, theft, ransomware affecting on-site systems). Protects against: single drive failure (covered by local backup), local disaster (covered by offsite copy), media failure (covered by multiple media types). Ransomware note: offline/airgapped backup is essential.'
  },
  {
    id: 803, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is RTO vs. RPO?',
    back: 'RTO (Recovery Time Objective): maximum acceptable time to restore service after an outage. How long can the business be down? Drives: redundancy, failover infrastructure, staffing. RPO (Recovery Point Objective): maximum acceptable data loss measured in time — how old can the restored data be? If RPO = 4 hours, backups must run at least every 4 hours. RPO drives backup frequency and replication requirements. Both are defined in the Business Continuity Plan and SLA agreements.'
  },
  {
    id: 804, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What types of UPS exist and how do they differ?',
    back: 'Offline/Standby UPS: normally passes utility power directly; switches to battery on outage (~4-8ms switchover). Adequate for most desktop PCs. Line-Interactive UPS: adds AVR (Automatic Voltage Regulation) to handle brownouts and surges without switching to battery — extends battery life, better protection. Online/Double-Conversion UPS: always runs on battery/inverter; utility power continuously charges battery — zero switchover time, cleanest power, most expensive. Required for sensitive servers and medical equipment.'
  },
  {
    id: 805, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is the difference between a surge protector and a UPS?',
    back: 'Surge protector: absorbs voltage spikes using MOVs (Metal Oxide Varistors) — protects equipment from surges but provides NO battery backup. Fails gradually (MOVs wear out after absorbing surges — the unit may still power devices but provide no protection). UPS: provides battery backup during outages PLUS surge protection. For any critical equipment (servers, workstations): use a UPS. Replace surge protectors every 3-5 years or after a large surge event.'
  },
  {
    id: 806, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is ESD and how do you prevent it?',
    back: 'Electrostatic Discharge: sudden flow of static electricity between objects at different electric potentials — can damage or destroy electronic components (CPU, RAM, GPU, motherboard) at charges as low as 30V (below human perception threshold of ~3,000V). Prevention: anti-static wrist strap connected to chassis ground while working, ESD mat on work surface, handle circuit boards by edges only, use anti-static bags for transport/storage, avoid carpeted areas, maintain 40-60% humidity in work areas.'
  },
  {
    id: 807, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What should a complete service ticket or documentation record contain?',
    back: 'Problem description (from user\'s perspective, exact quotes helpful), date/time reported, user contact information, system affected (hostname, serial number). Technician\'s: investigation steps taken, tools and tests used, findings and observations, root cause identified, solution implemented, parts replaced (with part numbers and serial numbers), preventive measures applied, time spent. Resolution status. Follow-up scheduled. Signature/technician ID. Must be complete enough for another technician to understand without additional explanation.'
  },
  {
    id: 808, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is change management and why is it important?',
    back: 'Formal process for controlling changes to IT systems: change request → impact/risk assessment → approval by change advisory board (CAB) → scheduling → implementation (with rollback plan) → testing/verification → documentation → closure. Prevents: unauthorized changes (a leading cause of outages), undocumented changes (makes troubleshooting impossible), poorly planned changes (no rollback plan). Provides: audit trail, accountability, reduced risk. Required by many compliance frameworks (SOX, HIPAA, PCI-DSS).'
  },
  {
    id: 809, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What regulated data types require special handling?',
    back: 'PII (Personally Identifiable Information): name, SSN, address, phone, email, DOB — regulated broadly. PHI (Protected Health Information): medical records, diagnoses, prescriptions — HIPAA compliance required. PCI data: payment card numbers, CVV, cardholder data — PCI-DSS compliance required. GDPR: any personal data of EU citizens — strict consent, retention, and breach notification rules. Requirements for all: encryption (at rest and in transit), access controls, retention policies, proper disposal, breach notification procedures.'
  },
  {
    id: 810, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is proper e-waste disposal?',
    back: 'Electronic waste contains toxic materials: lead (CRTs), mercury (fluorescent backlights), cadmium (batteries), chromium. Must NOT be placed in regular trash — illegal in many jurisdictions. Proper disposal options: manufacturer take-back programs, certified e-waste recyclers (R2 or e-Stewards certified), municipal hazardous waste collection events, retail electronics drop-off (Best Buy, Staples). Data-bearing devices: destroy data first (degauss, shred, wipe) before any disposal or recycling.'
  },
  {
    id: 811, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is an SDS (Safety Data Sheet)?',
    back: 'Formerly called MSDS (Material Safety Data Sheet). Required by OSHA for hazardous materials. Contains 16 sections: identification, hazard identification, composition, first aid measures, fire-fighting measures, accidental release, handling/storage, exposure controls/PPE, physical/chemical properties, stability/reactivity, toxicological information, environmental, disposal, transport, regulatory, other. Technicians need SDS for: printer toner, cleaning chemicals, batteries, CRT phosphors. Must be accessible to workers who use the material.'
  },
  {
    id: 812, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is an Acceptable Use Policy (AUP)?',
    back: 'Written policy defining authorized and prohibited uses of company IT resources: computers, internet, email, phones, data. Covers: permitted vs prohibited activities, monitoring notice (company may monitor all activity on company resources), software licensing compliance, social media use, personal use allowances, consequences for violations (up to termination and legal action). Users must sign before receiving access. Provides legal protection for the organization and sets clear expectations for employees.'
  },
  {
    id: 813, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is IT asset management?',
    back: 'Systematic tracking of all IT assets (hardware and software) throughout their lifecycle: procurement → deployment → maintenance → retirement/disposal. Records: asset type, make/model, serial number, location, assigned user, purchase date, warranty expiration, software licenses, and disposal date. Benefits: software license compliance, efficient maintenance scheduling, hardware refresh planning, security (identifies unmanaged "shadow IT" devices), budget planning, audit compliance. Tools: ServiceNow, Lansweeper, Snipe-IT.'
  },
  {
    id: 814, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What are environmental controls in a data center?',
    back: 'Physical conditions management to protect equipment and ensure reliability. Temperature: ASHRAE recommends 64.4–80.6°F (18–27°C) at intake. Humidity: 40-60% relative humidity (too dry = ESD risk, too wet = condensation). Cooling: CRAC/CRAH units, precision air conditioning. Airflow: hot/cold aisle arrangement, raised floor for cold air delivery, blanking panels to prevent hot air recirculation. Fire suppression: clean agent systems (FM-200, Halon alternatives) that don\'t damage equipment. Flood sensors, temperature/humidity monitoring.'
  },
  {
    id: 815, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is hot aisle / cold aisle in a data center?',
    back: 'Data center airflow management strategy. Cold aisle: server rack fronts face each other, cold supply air comes from perforated floor tiles or overhead vents into server intake. Hot aisle: server rack backs face each other, servers exhaust hot air into the hot aisle, which is then captured by CRAC returns (containment prevents mixing with cold air). Hot/Cold aisle containment (physical barriers) maximizes cooling efficiency by preventing hot and cold air from mixing. Can reduce cooling energy by 30-40%.'
  },
  {
    id: 816, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What are key professionalism standards for IT technicians?',
    back: 'Punctuality and reliability. Active listening — let the user finish speaking before responding. Communicate in terms the user understands (avoid unnecessary jargon). Respect privacy — don\'t view personal files unless required for the repair. Maintain confidentiality — don\'t share user data with others. Be honest about costs, timelines, and uncertainty. Follow up to confirm issue is resolved. No personal calls or distractions during customer interaction. Dress appropriately for the environment. Document everything.'
  },
  {
    id: 817, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'How should a technician handle a difficult or angry customer?',
    back: 'Remain calm and professional regardless of the customer\'s tone. Let the customer speak fully without interrupting. Use active listening and empathy: "I understand this is frustrating, and I want to help resolve it." Acknowledge the problem without assigning blame. Set realistic, honest expectations about timelines and possible outcomes. Focus on solutions, not excuses. Escalate when the issue is beyond your authority or ability. Never argue or become defensive. Document the interaction. Follow up after resolution.'
  },
  {
    id: 818, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is a disaster recovery plan (DRP)?',
    back: 'A documented, tested plan for restoring IT systems and operations after a major disruptive event (natural disaster, cyberattack, fire, major hardware failure). Contains: prioritized list of systems to restore (by business criticality), step-by-step recovery procedures, contact lists (staff, vendors, cloud providers), backup locations and access procedures, RTO/RPO targets per system, roles and responsibilities. Must be tested regularly: tabletop exercises, failover drills. Stored in multiple locations — including offsite.'
  },
  {
    id: 819, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is the difference between a DRP and a BCP?',
    back: 'DRP (Disaster Recovery Plan): focused on restoring IT infrastructure and technical systems after a disaster. Answers: how do we get systems back online? BCP (Business Continuity Plan): broader — ensures critical business functions continue during/after a disaster, including non-IT processes. May include: alternate work locations, manual processes (if IT fails), communication plans, supply chain alternatives, key personnel succession. DRP is a subset of BCP. BCP ensures the business survives; DRP ensures IT recovers.'
  },
  {
    id: 820, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is patch management and what are the steps?',
    back: 'Systematic process for identifying, testing, approving, and deploying software patches. Steps: 1. Inventory all systems and software. 2. Monitor for new patches/vulnerabilities. 3. Evaluate and prioritize (critical security patches first). 4. Test in a non-production environment. 5. Obtain approval (change management). 6. Deploy using tools (WSUS, SCCM, Intune, Ansible). 7. Verify deployment and monitor for issues. 8. Document. Balance: patch quickly to reduce vulnerability window vs. test thoroughly to avoid breaking production.'
  },
  {
    id: 821, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What software license types exist?',
    back: 'OEM (Original Equipment Manufacturer): tied to specific hardware, non-transferable — sold with a PC. Retail/Full Packaged Product (FPP): transferable between PCs. Volume License: single agreement covers multiple installations (Enterprise Agreement, MSDN). Subscription: ongoing payment for time-based access (Microsoft 365, Adobe Creative Cloud). Open Source: free to use/modify with conditions (GPL requires derivative works also be open source; MIT is more permissive). Freeware: free, closed source. Shareware: trial period, then purchase required.'
  },
  {
    id: 822, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is software copyright and piracy?',
    back: 'Copyright: automatic legal protection for original creative works including software code — gives creators exclusive rights to copy, distribute, and modify. Software piracy: using, copying, distributing, or modifying software in violation of the license. Penalties: civil (up to $150,000/work infringed) and criminal liability. Organizations must: conduct software audits to verify installations match licenses, use SAM (Software Asset Management) tools, train employees. BYOD policies should address personal software on work devices.'
  },
  {
    id: 823, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is the purpose of a network baseline?',
    back: 'A documented snapshot of normal network performance metrics captured during typical operations: bandwidth utilization, latency, packet loss rates, traffic patterns by protocol, device response times, error rates, connection counts. Used as a reference to: detect anomalies (spike in traffic may indicate attack or failure), diagnose "it\'s slow today" complaints, plan capacity upgrades, set meaningful alert thresholds in monitoring tools. Capture baselines at different times: business hours, off-hours, month-end. Update regularly as network changes.'
  },
  {
    id: 824, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What personal protective equipment (PPE) is relevant to PC technicians?',
    back: 'ESD wrist strap: prevents electrostatic discharge damage to components. Safety glasses: protection when working near CRT monitors (high voltage capacitors), drilling, cutting. Nitrile/latex gloves: chemical handling, cleaning agents, hot components. Respirator/mask: environments with dust, smoke, or toner (laser printer repair — toner is carcinogenic). Steel-toed boots: data centers, equipment moves. Avoid: loose clothing, jewelry, long hair near cooling fans or power supplies (entanglement risk).'
  },
  {
    id: 825, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is the proper technique for lifting heavy IT equipment?',
    back: 'Plan the lift: check weight (ask for help if > 50 lbs / 23 kg), clear path, use dollies/hand trucks for heavy items. Technique: stand close to item, feet shoulder-width apart, bend at knees (NOT waist), keep back straight, grip firmly, lift with leg muscles, keep load close to body. Avoid: twisting while lifting (pivot whole body), jerking motions. For rack-mounted equipment: use a server lift/mechanical assistant. Two-person lifts: coordinate ("ready, lift") before moving.'
  },
  {
    id: 826, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is a ticketing system and what makes a good ticket?',
    back: 'Software platform for tracking support requests from report through resolution. Examples: ServiceNow, Jira Service Management, Zendesk, osTicket, Freshservice. Good ticket includes: requester info (name, contact, department), date/time opened, priority/severity, clear problem description, system affected (hostname, serial), environment (OS, software versions), steps to reproduce, technician notes, resolution details, time spent, root cause, and closure date. Enables: SLA tracking, trend analysis, knowledge base building, performance metrics.'
  },
  {
    id: 827, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is the principle of privacy when working on a customer\'s device?',
    back: 'Access only files necessary to complete the repair — do not browse personal documents, photos, emails, or financial records out of curiosity. Do not share, copy, or discuss customer data with others. Maintain confidentiality of anything observed during repair. If illegal content is discovered (CSAM, piracy evidence): follow legal reporting obligations in your jurisdiction and company policy. CompTIA A+ tests: technicians should not violate user privacy and must handle sensitive data with discretion.'
  },
  {
    id: 828, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is a data retention policy?',
    back: 'Policy defining how long different categories of data must be kept and how they must be disposed of when no longer needed. Retention periods vary by: legal requirements (tax records 7 years, employment records 5 years, medical records 7+ years), regulatory compliance (HIPAA, SOX, GDPR), and business need. Data kept longer than required is a liability: larger breach exposure, higher storage costs. Data destroyed too soon may violate legal holds. Requires: classification scheme, automated enforcement, secure disposal processes.'
  },
  {
    id: 829, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is a rollback plan in change management?',
    back: 'Pre-defined procedure to reverse a change if it causes problems. Must be documented BEFORE implementing the change. Contents: who has authority to initiate rollback, exact technical steps to revert (specific commands or configurations), time limit (decision point — how long to wait before deciding to rollback), verification steps confirming successful rollback. Without a rollback plan: a failed change may result in extended downtime while scrambling to figure out how to revert. Rollback is part of the change approval package.'
  },
  {
    id: 830, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is a standard operating procedure (SOP)?',
    back: 'Step-by-step instructions for performing a specific task consistently and correctly, regardless of which technician performs it. Used in IT for: server builds (ensure consistent secure configuration), network device configuration, user account provisioning/de-provisioning, security incident response, backup procedures, onboarding new employees. Benefits: reduces errors, ensures consistency, aids training, facilitates compliance audits, enables delegation. Should be reviewed and updated whenever the underlying process changes.'
  },
  {
    id: 831, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What are remote access tools and security considerations?',
    back: 'Tools for remote system management: RDP (Windows, port 3389), VNC (cross-platform, various ports), SSH (Linux/network devices, port 22), TeamViewer/AnyDesk (commercial, NAT traversal). Security considerations: use VPN tunnel when possible, require MFA, use strong passwords/certificates, log all remote sessions (who connected, when, duration, actions), limit remote access to authorized personnel only, disconnect immediately when done, disable remote access when not actively needed.'
  },
  {
    id: 832, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is the first step when discovering a security incident?',
    back: 'Do not panic and do not attempt to fix it immediately — preserving evidence is the first priority. Document exactly what you observe: error messages, suspicious activity, timestamps, affected systems. Follow the incident response plan (if one exists). Report to the security team and/or supervisor immediately. Contain the affected system (isolate from network) to prevent spread. Do NOT power off the system (volatile memory evidence is lost). Do NOT attempt to investigate beyond your authorization. Chain of custody documentation begins immediately.'
  },
  {
    id: 833, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What physical security controls protect IT equipment?',
    back: 'Server room/wiring closet: locked door (badge access with logging), biometric authentication for critical areas. Mantraps/access control vestibules: prevent tailgating. CCTV cameras: deter and record unauthorized access. Visitor policy: sign-in log, escort required, visitor badges. Equipment locks: Kensington locks for laptops, lockable equipment racks, cable locks. Asset tagging: makes theft more difficult and aids recovery. Physical access bypasses most logical security controls — someone with physical access can often take any data or destroy systems.'
  },
  {
    id: 834, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is a screen lock policy and why is it important?',
    back: 'Requires entering a password/PIN to unlock the screen after a period of inactivity or when manually locked. Prevents unauthorized access when the user steps away. Windows shortcut: Win+L. Mac shortcut: Ctrl+Cmd+Q. Group Policy can enforce: minimum lock timeout, password complexity for unlock, prevent bypassing. CompTIA and most compliance frameworks recommend: lock after 5-15 minutes of inactivity. Mobile device equivalent: require passcode/biometric after screen off. Critical in open-plan offices and shared spaces.'
  },
  {
    id: 835, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is ITIL and how does it relate to IT support?',
    back: 'Information Technology Infrastructure Library: globally recognized framework of best practices for IT Service Management (ITSM). Key processes: Incident Management (restore service quickly), Problem Management (find and eliminate root cause of recurring incidents), Change Management (controlled change process), Service Level Management (define and measure SLAs), Asset and Configuration Management. CompTIA A+ references ITIL concepts. Many enterprise IT organizations follow ITIL for structured, measurable service delivery. Not a standard — a framework of recommendations.'
  },
  {
    id: 836, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is the difference between an incident and a problem in ITIL?',
    back: 'Incident: any unplanned interruption or reduction in quality of an IT service — focus is on RESTORING service as quickly as possible, even with a workaround. Problem: the underlying root cause of one or more incidents — focus is on IDENTIFYING and ELIMINATING the cause to prevent future incidents. Example: "Server is down" = incident (restore service now). "Server crashes every Monday morning" = problem (find why and fix permanently). Problem Management may raise a Known Error once the cause is identified, even before a fix exists.'
  },
  {
    id: 837, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What are cable management best practices?',
    back: 'Label both ends of every cable before installation. Use Velcro wraps (not zip ties — they can damage cables and make future changes difficult). Use horizontal and vertical cable managers in server racks. Color-code cables by function (e.g., blue = user data, red = management, yellow = storage). Keep cable runs away from power cables (EMI) and HVAC equipment. Use patch panels for structured cabling. Maintain cable documentation (what connects where). Good cable management: reduces troubleshooting time, improves airflow, enables safe changes without disrupting other cables.'
  },
  {
    id: 838, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is a rack unit (U) in data center equipment?',
    back: '1 rack unit (1U) = 1.75 inches (44.45 mm) of vertical rack space. Standard 19-inch racks hold 42U (full-height rack) or 24U (half-height). Equipment sizes: 1U = thin servers/switches, 2U = mid-size servers/storage, 4U = large storage arrays or workstation-class servers, 7U = large UPS units. Towers don\'t use rack units — floor space instead. Blade chassis: large U count with multiple blades inside. Plan rack space with space for cable management and adequate airflow between components.'
  },
  {
    id: 839, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is the difference between a hot spare and cold spare?',
    back: 'Hot spare (hot standby): fully powered, configured, and ready to take over immediately if primary fails — zero or near-zero downtime. Used in: RAID arrays (hot spare drive rebuilds automatically), server clusters (standby node immediately takes over). Cold spare: powered off and stored — must be physically installed and configured before use, resulting in significant downtime. Warm spare: powered on but not actively processing — requires some configuration/switchover steps. Hot > warm > cold in terms of availability, but hot spares cost more.'
  },
  {
    id: 840, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is data sovereignty?',
    back: 'The principle that data is subject to the laws and regulations of the country or jurisdiction in which it is physically stored, not necessarily where the organization is headquartered or where users are located. Relevant to cloud storage: data stored in EU data centers must comply with GDPR; data in China with Chinese data laws (government access requirements). Organizations must know exactly where cloud providers store their data and ensure it meets applicable legal requirements. Addressed in cloud provider SLAs and data processing agreements (DPAs).'
  },
  {
    id: 841, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is an IT audit?',
    back: 'Systematic examination of IT systems, processes, policies, and controls to assess: security posture, compliance with regulations (HIPAA, PCI-DSS, SOX, GDPR), accuracy of documentation, and effectiveness of controls. Conducted by: internal audit team or independent third-party auditors (required for some compliance frameworks). Output: findings and recommendations, compliance attestation. Drives remediation priorities and demonstrates due diligence. Required for ISO 27001, SOC 2, PCI-DSS, and other certifications.'
  },
  {
    id: 842, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is a virtual machine snapshot vs. a backup?',
    back: 'VM snapshot: point-in-time capture of VM state (disk, memory, configuration) stored on the same datastore. Fast to create and revert, ideal for testing before making changes or updates. Not a true backup: stored on the same storage system (destroyed if storage fails), performance degrades as snapshots accumulate (delta files), not meant for long-term retention. VM backup: copies VM to a separate storage location — survives storage failure, suitable for disaster recovery. Use both: snapshots for short-term rollback, backups for DR.'
  },
  {
    id: 843, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What network documentation should be maintained?',
    back: 'Network topology diagram: physical and logical layouts showing device connections. IP address management (IPAM): allocation of subnets, assigned IPs, DHCP scopes, DNS zones. Cable plant documentation: cable routes, lengths, patch panel assignments. Device inventory: hostname, IP, MAC, model, serial, location, firmware version. VLAN assignments and descriptions. Firewall and ACL rule documentation. Change log: what was changed, when, by whom. Critical for troubleshooting, onboarding, compliance audits, and disaster recovery. Keep diagrams in Visio, Lucidchart, or draw.io.'
  },
  {
    id: 844, exam: 'core2', domain: 'operational', difficulty: 'easy',
    front: 'What is multitasking etiquette when supporting users?',
    back: 'When actively working with or on behalf of a user: give them your full attention. Do not make or answer personal calls. Do not browse the internet or attend to unrelated work. Avoid texting. If you must handle an urgent interruption, excuse yourself briefly and explain. If working remotely on their system: narrate what you\'re doing and why — keeps the user informed and builds trust. After resolving: confirm the user can verify the fix works before closing the ticket. Ask if there are any other questions.'
  },
  {
    id: 845, exam: 'core2', domain: 'operational', difficulty: 'medium',
    front: 'What is the purpose of a knowledge base in IT support?',
    back: 'A searchable repository of documented solutions, known issues, troubleshooting guides, procedures, and FAQs. Built from: resolved tickets, technician experience, vendor documentation, and official knowledge articles. Benefits: reduces time-to-resolution (find proven solutions quickly), enables consistent solutions across all technicians, reduces repeat escalations, allows users to self-serve common issues (customer-facing KB). Examples: Confluence, SharePoint, ServiceNow KB, Microsoft KB (support.microsoft.com). Update when solutions change.'
  }

];

// ═══════════════════════════════════════════════════════════════════════════
// PLACEHOLDERS — completed in subsequent steps
// ═══════════════════════════════════════════════════════════════════════════
const QUIZ_QUESTIONS = [

  // ── CORE 1 · MOBILE DEVICES ─────────────────────────────────────────────
  {
    id: 1, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'What is the maximum range of NFC?',
    options: ['~10 cm (4 inches)', '~1 meter', '~10 meters', '~100 meters'],
    correct: 0,
    explanation: 'NFC (Near Field Communication) operates at 13.56 MHz with a practical maximum range of about 10 cm. This short range is intentional — it reduces the risk of accidental or malicious reads.'
  },
  {
    id: 2, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'Which mobile device component converts finger or stylus contact into digital coordinates?',
    options: ['Accelerometer', 'Gyroscope', 'Digitizer', 'Barometric sensor'],
    correct: 2,
    explanation: 'The digitizer is the touch-sensitive layer (usually capacitive) that detects contact and converts it to XY coordinates. The accelerometer detects orientation and motion; the gyroscope measures rotational rate.'
  },
  {
    id: 3, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'What does MDM stand for, and what is its primary purpose?',
    options: [
      'Mobile Data Manager — backs up mobile data',
      'Mobile Device Management — enforces corporate security policies on devices',
      'Mobile Disk Monitor — tracks storage usage',
      'Multi-Device Modem — enables carrier switching'
    ],
    correct: 1,
    explanation: 'MDM (Mobile Device Management) allows IT administrators to push configurations, enforce encryption and passcode policies, deploy apps, and remotely wipe corporate data on enrolled devices — essential for BYOD and corporate-owned device programs.'
  },
  {
    id: 4, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'A user\'s phone can connect to Wi-Fi but shows no cellular signal even though the SIM card is present. What should be checked first?',
    options: [
      'Replace the battery',
      'Remove, inspect, and reseat the SIM card',
      'Perform a factory reset',
      'Update the operating system'
    ],
    correct: 1,
    explanation: 'Wi-Fi working but no cellular with SIM present typically indicates the SIM is not making proper contact. Remove and reseat it first. If the SIM still isn\'t recognized, test it in another phone to determine whether the SIM or the device slot is faulty.'
  },
  {
    id: 5, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'Which wireless charging standard is used by most Android and Apple smartphones?',
    options: ['MagSafe', 'PowerShare', 'Qi', 'PMA'],
    correct: 2,
    explanation: 'Qi (pronounced "chee"), by the Wireless Power Consortium, is the dominant wireless charging standard across Apple, Samsung, Google, and most other manufacturers. MagSafe is Apple\'s magnetic alignment system built on top of Qi.'
  },
  {
    id: 6, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'What is the difference between a soft reset and a hard reset on a mobile device?',
    options: [
      'A soft reset erases all data; a hard reset only restarts',
      'A soft reset restarts without data loss; a hard reset erases all data and settings',
      'A soft reset requires removing the battery; a hard reset uses software',
      'They are identical in outcome'
    ],
    correct: 1,
    explanation: 'Soft reset: restarts the device, all data intact — equivalent to rebooting a PC. Hard reset (factory reset): erases all user data, apps, and settings, returning the device to factory defaults. Used for persistent issues or before resale.'
  },
  {
    id: 7, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    question: 'A user\'s iPhone was recently updated and the battery now drains significantly faster. What is the MOST likely cause?',
    options: [
      'The battery needs immediate replacement',
      'The Wi-Fi radio is permanently damaged',
      'Background App Refresh and location services are running excessively after the update',
      'The screen resolution increased with the update'
    ],
    correct: 2,
    explanation: 'After OS updates, settings like Background App Refresh and location services can be re-enabled or newly activated, causing increased battery consumption. Check Settings → Battery → Battery Usage by App to identify the culprit before replacing hardware.'
  },
  {
    id: 8, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'What does the accelerometer in a mobile device detect?',
    options: [
      'Geographic location',
      'Screen brightness changes',
      'Rotational velocity around an axis',
      'Physical tilt, orientation, and linear acceleration'
    ],
    correct: 3,
    explanation: 'The accelerometer detects linear acceleration and tilt — used for auto-rotate, step counting, and motion-triggered apps. The gyroscope measures rotational velocity. GPS determines geographic location. The ambient light sensor adjusts screen brightness.'
  },
  {
    id: 9, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'A laptop screen flickers when the lid is moved but is stable when held still. What is the most likely cause?',
    options: [
      'Outdated graphics driver',
      'Failing GPU',
      'Loose or damaged LCD/eDP cable near the hinge',
      'Incorrect screen resolution setting'
    ],
    correct: 2,
    explanation: 'Flickering that varies with lid movement is a physical connection symptom. The LCD/eDP cable runs through the hinge — a high-stress area where cables can fray or disconnect. A driver or GPU fault would flicker regardless of lid position.'
  },
  {
    id: 10, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    question: 'A company wants employees to use personal phones for work email but needs to enforce device encryption and remote-wipe capability. What is the best solution?',
    options: [
      'Issue corporate phones to all employees',
      'Ask employees to manually enable encryption',
      'Enroll devices in MDM with a containerization policy',
      'Require employees to sign an acceptable use policy only'
    ],
    correct: 2,
    explanation: 'MDM enrollment with containerization separates corporate and personal data on the device. IT can enforce encryption, passcode, and remote-wipe policies on the corporate container without touching personal data — the standard BYOD approach.'
  },
  {
    id: 11, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'What does IMEI stand for?',
    options: [
      'International Mobile Equipment Identifier',
      'Internal Memory Encryption Index',
      'Integrated Mobile Exchange Interface',
      'International Mobile Energy Indicator'
    ],
    correct: 0,
    explanation: 'IMEI (International Mobile Equipment Identifier) is a unique 15-digit number that globally identifies a specific mobile device. Carriers can block stolen devices using the IMEI, and emergency services can use it to locate callers.'
  },
  {
    id: 12, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    question: 'Which feature of eSIM distinguishes it from a physical SIM card?',
    options: [
      'eSIM is larger and stores more data',
      'eSIM must be physically swapped to change carriers',
      'eSIM is a programmable chip — carrier profiles are downloaded without a physical card',
      'eSIM is only available on Android devices'
    ],
    correct: 2,
    explanation: 'An eSIM (embedded SIM) is soldered into the device. Carrier activation is done by downloading a profile over the internet — no physical card insertion required. A device can store multiple carrier profiles and switch between them.'
  },
  {
    id: 13, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'What is tethering?',
    options: [
      'Sharing a smartphone\'s cellular data connection with another device',
      'Connecting a phone to a laptop via Bluetooth for audio playback',
      'Syncing phone contacts to a PC',
      'Using a phone as a barcode scanner'
    ],
    correct: 0,
    explanation: 'Tethering shares the phone\'s cellular data with another device via USB (most stable), Wi-Fi hotspot (creates a local wireless AP), or Bluetooth PAN. Carriers may charge extra or enforce data caps on tethered connections.'
  },
  {
    id: 14, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'A user\'s Android phone is extremely slow and shows 97% storage used. What is the FIRST action to take?',
    options: [
      'Perform a factory reset',
      'Free up storage — delete unused apps, clear caches, offload photos to cloud',
      'Replace the battery',
      'Flash a newer OS version'
    ],
    correct: 1,
    explanation: 'Near-full storage starves the OS of space for temp files and swap, causing severe slowdowns. Free storage space first (least destructive option) before considering reset or hardware replacement.'
  },
  {
    id: 15, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'What does enabling Airplane Mode do?',
    options: [
      'Disables GPS only',
      'Enables low-power mode',
      'Disables cellular only, keeps Wi-Fi active',
      'Disables all wireless transmitters — cellular, Wi-Fi, Bluetooth, and NFC'
    ],
    correct: 3,
    explanation: 'Airplane Mode disables all radio transmitters as required by aviation regulations. On modern devices, users can optionally re-enable Wi-Fi and Bluetooth while remaining in Airplane Mode — an allowance most airlines now permit.'
  },
  {
    id: 16, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'Starting with iPhone 15, what connector does Apple use?',
    options: ['Lightning', 'Micro-USB', 'USB-C', 'USB-A'],
    correct: 2,
    explanation: 'Apple switched iPhone to USB-C beginning with iPhone 15 (2023) to comply with EU regulations and align with other Apple devices (iPad, MacBook). Earlier iPhones used the proprietary Lightning connector.'
  },
  {
    id: 17, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    question: 'A corporate policy requires that employee phones be configured with a PIN, encrypted, and able to be remotely wiped if lost. Which technology enforces this?',
    options: [
      'VPN client',
      'GPS tracking app',
      'MDM (Mobile Device Management)',
      'Antivirus software'
    ],
    correct: 2,
    explanation: 'MDM solutions (Microsoft Intune, Jamf, VMware Workspace ONE) can enforce passcode requirements, encryption, and enable remote wipe. They also track device inventory and can deploy or block specific apps.'
  },
  {
    id: 18, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    question: 'A phone displays distorted colors and visible lines after being dropped, but touch input still works. Which component is most likely damaged?',
    options: [
      'Digitizer (touch layer)',
      'Display panel (LCD or OLED)',
      'Battery',
      'Processor'
    ],
    correct: 1,
    explanation: 'Distorted colors and lines after impact indicate damage to the display panel itself. Touch still working suggests the digitizer (a separate layer bonded to the display) may be intact. Screen assembly replacement is typically required.'
  },
  {
    id: 19, exam: 'core1', domain: 'mobile', difficulty: 'easy',
    question: 'What are the typical download speeds for 4G LTE?',
    options: ['1–5 Mbps', '10–100 Mbps', '500–1,000 Mbps', 'Over 10 Gbps'],
    correct: 1,
    explanation: '4G LTE provides typical download speeds of 10–100 Mbps, with theoretical peaks around 150 Mbps. 5G (sub-6 GHz) typically achieves 100–900 Mbps; 5G mmWave can exceed 1 Gbps in ideal conditions.'
  },
  {
    id: 20, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    question: 'A laptop screen is extremely dim even at maximum brightness, but the laptop displays normally on an external monitor. What is the most likely faulty component?',
    options: [
      'GPU (graphics card)',
      'Windows display driver',
      'LCD backlight or backlight driver circuit',
      'HDMI port'
    ],
    correct: 2,
    explanation: 'External monitor working normally confirms the GPU is functional. The dim internal screen with backlight functioning (can barely see image) points to a failing LED backlight strip or its driver board. If there\'s no image at all internally, suspect the LCD cable or panel.'
  },

  // ── CORE 1 · NETWORKING ─────────────────────────────────────────────────
  {
    id: 21, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'Which port does HTTPS use?',
    options: ['80', '443', '8080', '22'],
    correct: 1,
    explanation: 'HTTPS (HTTP Secure) uses port 443 TCP. HTTP uses port 80. Port 8080 is a common alternative for HTTP development/proxies. Port 22 is SSH.'
  },
  {
    id: 22, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'A PC receives the IP address 169.254.14.7. What does this indicate?',
    options: [
      'The PC has a valid static IP configured',
      'The PC received a DHCP lease successfully',
      'The DHCP server was unreachable and APIPA assigned an address automatically',
      'The PC is behind a NAT router'
    ],
    correct: 2,
    explanation: 'The 169.254.0.0/16 range is APIPA (Automatic Private IP Addressing). Windows self-assigns an address in this range when no DHCP server responds. The device cannot reach the internet and has limited local communication.'
  },
  {
    id: 23, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'What is the maximum cable segment length for Cat5e and Cat6 Ethernet?',
    options: ['55 meters', '100 meters', '150 meters', '500 meters'],
    correct: 1,
    explanation: 'Both Cat5e and Cat6 have a 100-meter (328-foot) maximum segment length for standard Ethernet (10BASE-T through 1000BASE-T). Cat6A also uses 100m for 10GBASE-T. Beyond 100m, use a switch or fiber.'
  },
  {
    id: 24, exam: 'core1', domain: 'networking', difficulty: 'medium',
    question: 'Which OSI layer handles logical addressing (IP addresses) and routing between networks?',
    options: ['Layer 1 — Physical', 'Layer 2 — Data Link', 'Layer 3 — Network', 'Layer 4 — Transport'],
    correct: 2,
    explanation: 'Layer 3 (Network) handles logical addressing (IP) and routing. Layer 2 (Data Link) handles physical/MAC addressing and frames. Layer 4 (Transport) manages end-to-end communication and ports (TCP/UDP).'
  },
  {
    id: 25, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'Which private IP address range belongs to Class C?',
    options: [
      '10.0.0.0 – 10.255.255.255',
      '172.16.0.0 – 172.31.255.255',
      '192.168.0.0 – 192.168.255.255',
      '224.0.0.0 – 239.255.255.255'
    ],
    correct: 2,
    explanation: 'RFC 1918 private ranges: Class A = 10.0.0.0/8, Class B = 172.16.0.0/12, Class C = 192.168.0.0/16. The 224.x.x.x range is multicast, not private unicast.'
  },
  {
    id: 26, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'What protocol and ports does DHCP use?',
    options: [
      'TCP port 80',
      'UDP ports 67 (server) and 68 (client)',
      'TCP ports 67 and 68',
      'UDP port 53'
    ],
    correct: 1,
    explanation: 'DHCP uses UDP because a client with no IP cannot form a TCP connection. The server listens on UDP port 67; the client listens for responses on UDP port 68.'
  },
  {
    id: 27, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'What is the purpose of DNS?',
    options: [
      'Automatically assigns IP addresses to devices',
      'Translates domain names to IP addresses',
      'Routes packets between different networks',
      'Provides a secure tunnel between remote sites'
    ],
    correct: 1,
    explanation: 'DNS (Domain Name System) resolves human-readable hostnames (google.com) to IP addresses. Without DNS, users would need to memorize IP addresses. DNS operates on port 53 (UDP for queries, TCP for zone transfers).'
  },
  {
    id: 28, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'What is the key difference between a hub and a switch?',
    options: [
      'A hub operates at Layer 3; a switch operates at Layer 2',
      'A hub broadcasts frames to all ports; a switch forwards frames only to the specific MAC address port',
      'A hub supports full-duplex; a switch does not',
      'They are functionally identical for modern networks'
    ],
    correct: 1,
    explanation: 'A hub (Layer 1) floods every frame out all ports — all devices share one collision domain. A switch (Layer 2) learns MAC addresses and forwards frames only to the port of the destination device, reducing collisions and improving performance.'
  },
  {
    id: 29, exam: 'core1', domain: 'networking', difficulty: 'medium',
    question: 'A workstation can ping its default gateway but cannot reach any internet sites by IP address. The gateway can reach the internet. What is the most likely cause?',
    options: [
      'The workstation NIC is faulty',
      'NAT is not functioning on the gateway router, or the ISP link is down',
      'The workstation has the wrong subnet mask',
      'The workstation\'s DNS is misconfigured'
    ],
    correct: 1,
    explanation: 'If pinging the gateway works but internet IPs don\'t respond, the problem is at or beyond the gateway: broken NAT translation, ISP connectivity issue, or firewall blocking. A wrong subnet mask would likely prevent even gateway pings. DNS misconfiguration would only affect name resolution, not raw IP pings.'
  },
  {
    id: 30, exam: 'core1', domain: 'networking', difficulty: 'medium',
    question: 'What is the purpose of a VLAN?',
    options: [
      'Extends the broadcast domain across multiple buildings',
      'Assigns IPs automatically to devices',
      'Logically segments a physical network into separate broadcast domains',
      'Encrypts traffic between switches'
    ],
    correct: 2,
    explanation: 'VLANs (Virtual LANs) logically divide a single physical switch infrastructure into separate broadcast domains. Devices in different VLANs cannot communicate directly without a router or Layer 3 switch. This improves security and reduces broadcast traffic.'
  },
  {
    id: 31, exam: 'core1', domain: 'networking', difficulty: 'medium',
    question: 'What is the maximum speed and distance for Cat6A supporting 10-Gigabit Ethernet?',
    options: [
      '1 Gbps up to 100m',
      '10 Gbps up to 55m',
      '10 Gbps up to 100m',
      '40 Gbps up to 100m'
    ],
    correct: 2,
    explanation: 'Cat6A (Augmented) supports 10GBASE-T at 10 Gbps up to 100 meters. Cat6 (non-augmented) supports 10 Gbps only up to 55 meters. Cat5e maxes at 1 Gbps over 100m.'
  },
  {
    id: 32, exam: 'core1', domain: 'networking', difficulty: 'medium',
    question: 'Which fiber optic type uses a larger core and supports multiple simultaneous light paths?',
    options: [
      'Single-mode fiber (SMF)',
      'Multimode fiber (MMF)',
      'Plenum-rated fiber',
      'Direct-burial fiber'
    ],
    correct: 1,
    explanation: 'Multimode fiber has a core of 50 or 62.5 microns and allows multiple light modes. It is used for shorter distances (up to ~550m for OM4 at 10 Gbps). Single-mode fiber has an ~8-micron core, single light path, and supports distances up to 100+ km using laser sources.'
  },
  {
    id: 33, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'Which port does SMTP use for server-to-server email transfer?',
    options: ['110', '143', '25', '993'],
    correct: 2,
    explanation: 'SMTP (Simple Mail Transfer Protocol) uses port 25 for server-to-server mail relay. Client-to-server submission uses port 587 (with STARTTLS). POP3 = 110, IMAP = 143, IMAPS = 993, POP3S = 995.'
  },
  {
    id: 34, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'Which command is used to test DNS resolution on a Windows workstation?',
    options: ['ping', 'tracert', 'nslookup', 'ipconfig'],
    correct: 2,
    explanation: 'nslookup queries a DNS server to resolve hostnames to IP addresses (and vice versa). It can test specific DNS servers and query specific record types. ipconfig /displaydns shows the local cache; ping resolves names as a side effect but nslookup is the dedicated DNS diagnostic tool.'
  },
  {
    id: 35, exam: 'core1', domain: 'networking', difficulty: 'medium',
    question: 'Which PoE standard provides up to 15.4W per port?',
    options: ['IEEE 802.3af (PoE)', 'IEEE 802.3at (PoE+)', 'IEEE 802.3bt (PoE++)', 'IEEE 802.3ab'],
    correct: 0,
    explanation: '802.3af (PoE) delivers up to 15.4W. 802.3at (PoE+) delivers up to 30W. 802.3bt (PoE++) delivers up to 60W (Type 3) or 100W (Type 4). 802.3ab is the Gigabit Ethernet standard (not PoE).'
  },
  {
    id: 36, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'Which Wi-Fi frequency band offers longer range but lower maximum throughput?',
    options: ['5 GHz', '6 GHz', '2.4 GHz', '60 GHz'],
    correct: 2,
    explanation: '2.4 GHz penetrates walls better (longer range) but has fewer non-overlapping channels (3 in the US) and tops out at ~600 Mbps with 802.11n. 5 GHz offers more channels and higher throughput (up to 3.5 Gbps with 802.11ac) at shorter range.'
  },
  {
    id: 37, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'What does NAT (Network Address Translation) do?',
    options: [
      'Translates private IP addresses to a public IP for internet communication',
      'Resolves domain names to IP addresses',
      'Assigns IP addresses dynamically to devices on the LAN',
      'Encrypts all traffic leaving the local network'
    ],
    correct: 0,
    explanation: 'NAT allows multiple devices with private (RFC 1918) IP addresses to share a single public IP for internet communication. The router maintains a table mapping private IP:port to public IP:port. This also conserves IPv4 address space.'
  },
  {
    id: 38, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'What does the tracert command show?',
    options: [
      'The ARP cache for the local subnet',
      'The path packets take to a destination, with latency at each hop',
      'All open ports on a remote host',
      'DNS records for a domain'
    ],
    correct: 1,
    explanation: 'tracert (Windows) / traceroute (Linux) sends packets with incrementing TTL values to reveal each router between source and destination, and the round-trip time to each. Used to pinpoint where network latency or failure occurs in the path.'
  },
  {
    id: 39, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'What is the subnet mask for a /24 network?',
    options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.128'],
    correct: 2,
    explanation: '/24 means 24 bits are the network portion. Binary: 11111111.11111111.11111111.00000000 = 255.255.255.0. This gives 256 addresses, 254 usable hosts. /8 = 255.0.0.0, /16 = 255.255.0.0, /25 = 255.255.255.128.'
  },
  {
    id: 40, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'What does pinging 127.0.0.1 test?',
    options: [
      'Connectivity to the default gateway',
      'The local TCP/IP protocol stack, without sending traffic on the physical network',
      'Whether the DHCP server is reachable',
      'DNS resolution'
    ],
    correct: 1,
    explanation: '127.0.0.1 is the loopback address. Pinging it verifies the local TCP/IP stack is installed and functional. No packets leave the NIC — it requires no physical network connection. If this fails, TCP/IP is corrupted or not installed.'
  },

  // ── CORE 1 · HARDWARE ───────────────────────────────────────────────────
  {
    id: 41, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    question: 'What is the minimum number of drives required for RAID 5?',
    options: ['2', '3', '4', '6'],
    correct: 1,
    explanation: 'RAID 5 uses striping with distributed parity across all drives. Minimum: 3 drives. One drive\'s worth of capacity is used for parity; failure of any 1 drive is tolerated. With 3 drives: 2/3 of total capacity is usable.'
  },
  {
    id: 42, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'A technician tries to install DDR4 RAM into a DDR3 motherboard slot. What happens?',
    options: [
      'The RAM installs and runs at reduced speed',
      'The RAM installs but the system is unstable',
      'The RAM does not fit — DDR3 and DDR4 have different notch positions',
      'The BIOS rejects the RAM after POST'
    ],
    correct: 2,
    explanation: 'DDR3, DDR4, and DDR5 each have a notch in a different position along the connector edge, physically preventing installation in the wrong slot. This keying mechanism is intentional to prevent damage from incorrect RAM installation.'
  },
  {
    id: 43, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'What does POST stand for, and when does it occur?',
    options: [
      'Power-On Self Test — runs at startup before the OS loads',
      'Peripheral Output System Test — runs during Windows startup',
      'Processor Optimized Speed Test — runs during overclocking',
      'Pre-Operating System Transfer — runs during OS installation'
    ],
    correct: 0,
    explanation: 'POST (Power-On Self Test) is performed by the BIOS/UEFI each time the computer is powered on. It tests the CPU, RAM, storage controllers, and basic peripherals. A POST failure may produce beep codes or diagnostic LED patterns.'
  },
  {
    id: 44, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'An inkjet printer produces faded streaks even with new ink cartridges. What should be done first?',
    options: [
      'Replace the printer',
      'Run the printer\'s built-in printhead cleaning utility',
      'Replace the paper with a different type',
      'Reinstall the printer driver'
    ],
    correct: 1,
    explanation: 'Faded or streaked output with new cartridges is almost always caused by clogged print head nozzles. The built-in cleaning utility purges dried ink. Run 2–3 cycles with a nozzle check print after each. Avoid over-cleaning (wastes significant ink).'
  },
  {
    id: 45, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'What type of printer burns images onto heat-sensitive paper using no ink or toner?',
    options: ['Laser', 'Inkjet', 'Thermal', 'Impact/dot matrix'],
    correct: 2,
    explanation: 'Thermal printers use a heating element to activate heat-sensitive paper. Used in receipt printers, label printers, and older fax machines. No consumables beyond paper. Common failure symptom: blank output when paper is loaded wrong side facing the print head.'
  },
  {
    id: 46, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'Which RAID level provides the fastest read/write performance but offers NO fault tolerance?',
    options: ['RAID 0', 'RAID 1', 'RAID 5', 'RAID 10'],
    correct: 0,
    explanation: 'RAID 0 (striping) splits data across all drives simultaneously — maximum speed, no parity overhead. However, failure of any single drive destroys the entire array. Used for scratch disks, video editing, or gaming where speed matters more than redundancy.'
  },
  {
    id: 47, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    question: 'What voltages does a SATA power connector provide?',
    options: ['3.3V and 5V only', '5V and 12V only', '3.3V, 5V, and 12V', '12V only'],
    correct: 2,
    explanation: 'The 15-pin SATA power connector provides 3.3V (for modern drive logic), 5V (drive electronics), and 12V (HDD spindle motors). Most HDDs primarily use 5V and 12V. SSDs mainly use 3.3V and 5V. Compare to Molex (4-pin) which provides only 5V and 12V.'
  },
  {
    id: 48, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'What is the purpose of thermal paste applied between a CPU and its heatsink?',
    options: [
      'Provides an electrical connection between the CPU and heatsink',
      'Fills microscopic surface gaps to maximize heat transfer',
      'Prevents the heatsink from vibrating loose',
      'Protects the CPU from ESD damage during installation'
    ],
    correct: 1,
    explanation: 'CPU heat spreaders and heatsink bases have microscopic surface imperfections. Thermal interface material (TIM/thermal paste) fills these air gaps — air is a poor thermal conductor. Proper application significantly reduces CPU temperatures.'
  },
  {
    id: 49, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    question: 'A laser printer produces pages where toner smears when rubbed with a finger. Which component is most likely failing?',
    options: ['Drum', 'Laser scanning assembly', 'Fuser assembly', 'Transfer roller'],
    correct: 2,
    explanation: 'The fuser assembly uses heat and pressure to permanently bond toner particles to paper. If the fuser is failing (insufficient heat, worn pressure roller), toner sits on paper loosely and smears when touched. The fuser is the most common laser printer maintenance replacement.'
  },
  {
    id: 50, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    question: 'What does an 80 PLUS Gold certification indicate about a power supply?',
    options: [
      'The PSU delivers 80W total',
      'The PSU is 87–90% efficient at 20%, 50%, and 100% load',
      'The PSU has gold-plated connectors',
      'The PSU has a gold-colored enclosure'
    ],
    correct: 1,
    explanation: '80 PLUS certifications rate PSU efficiency. Gold: 87–90% efficient across load levels. Higher efficiency means less power wasted as heat. Tiers: 80 PLUS Basic (80%), Bronze (82–85%), Silver (85–88%), Gold (87–90%), Platinum (90–92%), Titanium (90–94%).'
  },
  {
    id: 51, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'Which display technology produces self-illuminating pixels capable of true black and infinite contrast?',
    options: ['TN (Twisted Nematic)', 'IPS (In-Plane Switching)', 'VA (Vertical Alignment)', 'OLED (Organic Light-Emitting Diode)'],
    correct: 3,
    explanation: 'OLED pixels generate their own light and can switch off completely for true black — giving an infinite contrast ratio. TN, IPS, and VA are all LCD technologies that require a backlight, which causes light bleed. OLED weakness: potential burn-in with static content.'
  },
  {
    id: 52, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    question: 'What interface does NVMe use to communicate with the system?',
    options: ['SATA', 'USB 3.2', 'PCIe', 'SAS'],
    correct: 2,
    explanation: 'NVMe (Non-Volatile Memory Express) uses the PCIe bus, bypassing the older AHCI/SATA protocol stack. PCIe 3.0 x4 NVMe delivers ~3.5 GB/s; PCIe 4.0 x4 delivers ~7 GB/s. SATA III is limited to ~600 MB/s. NVMe also greatly reduces latency.'
  },
  {
    id: 53, exam: 'core1', domain: 'hardware', difficulty: 'hard',
    question: 'During POST, the system emits 3 short beeps and does not boot. Based on AMI BIOS codes, what does this indicate?',
    options: ['Video card failure', 'Keyboard not detected', 'Base memory (RAM) failure', 'CPU failure'],
    correct: 2,
    explanation: 'On AMI BIOS systems, 3 short beeps typically indicates a base memory (RAM) failure. Codes vary by manufacturer — always consult the motherboard manual. Modern boards increasingly use diagnostic LEDs instead of beep codes. Reseat or test RAM sticks individually.'
  },
  {
    id: 54, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'What is the speed of Thunderbolt 3 and Thunderbolt 4?',
    options: ['10 Gbps', '20 Gbps', '40 Gbps', '80 Gbps'],
    correct: 2,
    explanation: 'Thunderbolt 3 and 4 both operate at 40 Gbps using the USB-C connector form factor. TB4 adds minimum requirements over TB3: 32 Gbps PCIe throughput, 3840×2160 display support, and 15W charging. Thunderbolt 5 doubles this to 80 Gbps.'
  },
  {
    id: 55, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'A technician replaces the CMOS battery. What is the expected result?',
    options: [
      'The PC boots faster after the reset',
      'RAM capacity doubles temporarily',
      'Date/time and BIOS settings reset to factory defaults',
      'Network adapters reset to DHCP'
    ],
    correct: 2,
    explanation: 'The CMOS battery (typically CR2032) maintains power to the small CMOS RAM that stores BIOS settings, date/time, and boot order. Removing or replacing it causes these settings to revert to factory defaults. After replacement, reconfigure date/time, boot order, and any custom BIOS settings.'
  },
  {
    id: 56, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    question: 'What is dual-channel memory and what does it require?',
    options: [
      'Twice the voltage for overclocking',
      'Installing matching RAM sticks in the correct paired slots to double memory bandwidth',
      'Using RAM from two different manufacturers for redundancy',
      'A special CPU feature that works regardless of RAM slot configuration'
    ],
    correct: 1,
    explanation: 'Dual-channel doubles the effective memory bandwidth by using two sticks simultaneously across a wider bus. Requirements: two identical (or closely matched) sticks installed in the correct color-coded slot pairs (usually A1+B1 or A2+B2 — check the motherboard manual).'
  },
  {
    id: 57, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'A user plugs their monitor into the dedicated GPU\'s output but gets no display. The motherboard\'s integrated graphics port works fine. What should be checked?',
    options: [
      'The monitor is defective',
      'The GPU is not fully seated in the PCIe slot, or external power connectors are missing',
      'Windows needs reinstalling',
      'The HDMI cable must be replaced'
    ],
    correct: 1,
    explanation: 'If integrated graphics work but the dedicated GPU does not, verify: the GPU is fully clicked into the PCIe x16 slot, the 6-pin or 8-pin PCIe power connectors are attached, and the BIOS is not set to prefer integrated graphics exclusively.'
  },
  {
    id: 58, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    question: 'A laser printer produces a vertical black line down every page. Which component is the most likely cause?',
    options: [
      'Fuser assembly',
      'Paper pickup rollers',
      'Scratched or dirty drum cartridge',
      'Transfer corona wire'
    ],
    correct: 2,
    explanation: 'Vertical black lines that appear consistently on every page indicate a scratch or debris on the photosensitive drum. The same spot on the drum passes the same position on every rotation, creating a repeating vertical mark. Replace the drum/toner cartridge assembly.'
  },
  {
    id: 59, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'A new toner cartridge was installed but the laser printer still prints completely blank pages. What should be checked first?',
    options: [
      'Print resolution settings',
      'Whether the toner cartridge\'s protective sealing strip was removed',
      'Paper size configuration',
      'Network connectivity to the print server'
    ],
    correct: 1,
    explanation: 'New toner cartridges ship with a plastic sealing strip that prevents toner from spilling during shipping. If this strip is not removed before installation, toner cannot transfer to the drum — resulting in blank pages. Always pull the strip fully out before inserting.'
  },
  {
    id: 60, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'What is the maximum speed of USB 3.2 Gen 2x2?',
    options: ['480 Mbps', '5 Gbps', '10 Gbps', '20 Gbps'],
    correct: 3,
    explanation: 'USB 3.2 Gen 2x2 ("USB 20Gbps") uses two 10 Gbps lanes for 20 Gbps total. USB 3.2 Gen 1 = 5 Gbps, Gen 2 = 10 Gbps. USB 2.0 = 480 Mbps. Thunderbolt 3/4 = 40 Gbps.'
  },

  // ── CORE 1 · VIRTUALIZATION & CLOUD ─────────────────────────────────────
  {
    id: 61, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    question: 'What is the key difference between a Type 1 and a Type 2 hypervisor?',
    options: [
      'Type 1 runs on top of a host OS; Type 2 runs on bare hardware',
      'Type 1 runs directly on hardware with no host OS; Type 2 runs as an application on a host OS',
      'Type 1 supports only Windows VMs; Type 2 supports Linux VMs',
      'Type 1 uses software virtualization; Type 2 uses hardware-assisted virtualization'
    ],
    correct: 1,
    explanation: 'Type 1 (bare-metal): VMware ESXi, Microsoft Hyper-V, Xen — runs directly on hardware, better performance, used in production. Type 2 (hosted): VirtualBox, VMware Workstation, Parallels — runs as an app on a host OS, easier setup, used for desktop testing and development.'
  },
  {
    id: 62, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    question: 'Which cloud service model provides complete applications delivered via a web browser, with the provider managing all underlying infrastructure?',
    options: [
      'IaaS — Infrastructure as a Service',
      'PaaS — Platform as a Service',
      'SaaS — Software as a Service',
      'FaaS — Function as a Service'
    ],
    correct: 2,
    explanation: 'SaaS delivers fully managed applications over the internet. The provider manages hardware, OS, middleware, and the application. Users just log in and use it. Examples: Microsoft 365, Salesforce, Google Workspace, Dropbox.'
  },
  {
    id: 63, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    question: 'What does a VM snapshot do?',
    options: [
      'Creates a backup copy stored in a different physical data center',
      'Captures the complete state of a VM at a point in time for quick revert',
      'Clones a VM to a different physical host',
      'Runs a performance benchmark of the VM'
    ],
    correct: 1,
    explanation: 'A snapshot captures the VM\'s disk state, memory contents, and configuration at a moment in time. You can revert to that state quickly if a change causes problems. Snapshots are NOT backups — they\'re stored on the same datastore and offer no protection against storage failure.'
  },
  {
    id: 64, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    question: 'Which technology allows a running VM to move between physical hosts without any downtime?',
    options: ['VM cloning', 'Thin provisioning', 'Live migration (e.g., VMware vMotion)', 'Cloud bursting'],
    correct: 2,
    explanation: 'Live migration moves a powered-on VM between physical hosts with no interruption — memory is synchronized, then control is transferred. VMware calls it vMotion; Microsoft uses Hyper-V Live Migration; KVM also supports live migration. Used for host maintenance and load balancing.'
  },
  {
    id: 65, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    question: 'What does IaaS provide to its customers?',
    options: [
      'Ready-to-use applications accessed through a browser',
      'A development platform with managed OS, runtime, and middleware',
      'Virtualized compute, storage, and networking resources that the customer manages',
      'Serverless function execution triggered by events'
    ],
    correct: 2,
    explanation: 'IaaS provides raw infrastructure: VMs, virtual networking, and storage. The customer manages the OS, middleware, applications, and data. The provider manages physical hardware and hypervisor. Examples: AWS EC2, Azure Virtual Machines, Google Compute Engine.'
  },
  {
    id: 66, exam: 'core1', domain: 'virtualization', difficulty: 'medium',
    question: 'What is the Shared Responsibility Model in cloud computing?',
    options: [
      'Customers and providers split the monthly cloud bill equally',
      'A framework defining which security responsibilities belong to the provider vs. the customer',
      'Both provider and customer use the same administrative credentials',
      'Cloud resources are shared between competing organizations'
    ],
    correct: 1,
    explanation: '"Security OF the cloud" (physical infrastructure, hypervisor, global network) is always the provider\'s responsibility. "Security IN the cloud" (data, identity and access management, OS hardening in IaaS, application security) is the customer\'s responsibility. The boundary shifts depending on service model (IaaS/PaaS/SaaS).'
  },
  {
    id: 67, exam: 'core1', domain: 'virtualization', difficulty: 'easy',
    question: 'What is VDI (Virtual Desktop Infrastructure)?',
    options: [
      'A wireless protocol for virtual meetings',
      'A system where full desktop OS instances run on centralized servers and are accessed remotely by thin clients',
      'A virtual private network protocol',
      'A disk redundancy system for virtual machines'
    ],
    correct: 1,
    explanation: 'VDI hosts Windows (or other OS) desktop instances on servers in a data center. Users access their personalized desktop from thin clients, tablets, or any device with a VDI client. Benefits: centralized management, data stays in the data center, easy provisioning and recovery.'
  },

  // ── CORE 1 · HARDWARE & NETWORK TROUBLESHOOTING ─────────────────────────
  {
    id: 68, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    question: 'A PC powers on — fans spin and LEDs light up — but nothing appears on the monitor. The monitor works on another PC. What should be checked first?',
    options: [
      'Replace the CPU immediately',
      'Verify the video cable is plugged into the dedicated GPU port (not motherboard), and that the GPU is fully seated',
      'Reinstall Windows',
      'Replace the power supply'
    ],
    correct: 1,
    explanation: 'The most common mistake is plugging the video cable into the motherboard\'s onboard port when a discrete GPU is installed (BIOS may disable onboard). Also verify the GPU clicks fully into the PCIe slot and all power connectors are attached. Then proceed to POST beep codes if display still fails.'
  },
  {
    id: 69, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    question: 'According to CompTIA\'s 6-step troubleshooting methodology, what is the step AFTER identifying the problem?',
    options: [
      'Establish a plan of action and implement the solution',
      'Establish a theory of probable cause',
      'Test the theory to determine the cause',
      'Document findings, actions, and outcomes'
    ],
    correct: 1,
    explanation: 'CompTIA\'s 6 steps: 1. Identify the problem → 2. Establish a theory of probable cause → 3. Test the theory → 4. Establish a plan and implement → 5. Verify functionality and implement preventive measures → 6. Document. Always theorize before acting.'
  },
  {
    id: 70, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    question: 'Which tool is BEST for verifying that an Ethernet cable is properly terminated at both ends?',
    options: ['Multimeter', 'Cable tester', 'Wi-Fi analyzer', 'Loopback plug'],
    correct: 1,
    explanation: 'A cable tester verifies continuity and correct pinout for all 8 wires at both ends of a cable (detects opens, shorts, and miswires). A loopback plug tests a NIC port, not a cable run. A multimeter can test continuity but not wiring order.'
  },
  {
    id: 71, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    question: 'Only one specific user\'s device experiences frequent Wi-Fi disconnections. All other devices on the same AP are unaffected. What should be investigated?',
    options: [
      'Replace the wireless access point',
      'Check the user\'s device — wireless driver, power management settings, and AP proximity',
      'Replace the network switch',
      'Increase the access point\'s transmit power for all users'
    ],
    correct: 1,
    explanation: 'Intermittent disconnections affecting only one device point to that device. Key checks: update or reinstall the wireless driver; disable NIC power management (Device Manager → NIC → Power Management → uncheck "Allow computer to turn off this device to save power"); verify signal strength and distance to AP.'
  },
  {
    id: 72, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    question: 'What command shows all active TCP/UDP connections and listening ports with numeric addresses on Windows?',
    options: ['ipconfig /all', 'tracert 8.8.8.8', 'netstat -an', 'nslookup'],
    correct: 2,
    explanation: 'netstat -an: -a shows all connections and listening ports; -n displays numeric IPs and ports (faster than DNS resolution). Add -b (requires Admin) to also show the executable using each connection. Use TCPView (Sysinternals) for a real-time GUI view.'
  },
  {
    id: 73, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    question: 'What tool provides the most thorough standalone memory (RAM) test?',
    options: ['Windows Memory Diagnostic', 'Memtest86', 'chkdsk /r', 'sfc /scannow'],
    correct: 1,
    explanation: 'Memtest86 is a bootable, OS-independent memory tester that runs extensive patterns over multiple passes (minimum 3–4 hours for a thorough test). Any error = faulty RAM. Windows Memory Diagnostic runs fewer tests and runs within the Windows boot environment. chkdsk and sfc test the file system and OS files, not RAM.'
  },
  {
    id: 74, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    question: 'Why should a technician change only ONE variable at a time when troubleshooting?',
    options: [
      'To save time by limiting the number of reboots',
      'To isolate cause and effect — so the exact fix can be identified or the problem can be precisely reproduced',
      'To comply with change management policy',
      'To prevent data loss during troubleshooting'
    ],
    correct: 1,
    explanation: 'Changing multiple things simultaneously makes it impossible to know which change fixed the problem (or made it worse). One variable at a time ensures each change can be evaluated independently, enabling systematic diagnosis and repeatable resolution.'
  },
  {
    id: 75, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'easy',
    question: 'What does ARP (Address Resolution Protocol) do?',
    options: [
      'Resolves domain names to IP addresses',
      'Dynamically assigns IP addresses to hosts',
      'Resolves IP addresses to MAC addresses on the local subnet',
      'Routes packets between different IP networks'
    ],
    correct: 2,
    explanation: 'ARP resolves a known Layer 3 IP address to an unknown Layer 2 MAC address. The device broadcasts "Who has IP x.x.x.x?" and the owner replies with its MAC address. Results are cached in the ARP table (arp -a to view). ARP only operates within the local subnet.'
  },

  // ── CORE 2 · OPERATING SYSTEMS ──────────────────────────────────────────
  {
    id: 76, exam: 'core2', domain: 'os', difficulty: 'easy',
    question: 'Which Windows file system supports file-level permissions (ACLs), EFS encryption, and files larger than 4 GB?',
    options: ['FAT32', 'exFAT', 'NTFS', 'CDFS'],
    correct: 2,
    explanation: 'NTFS (New Technology File System) supports ACLs (file/folder permissions), EFS encryption, journaling, compression, and virtually unlimited file sizes. FAT32 maxes out at 4 GB per file with no permissions. exFAT handles large files but has no permissions or encryption support.'
  },
  {
    id: 77, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'A technician needs to repair corrupted Windows system files. What is the correct order of operations?',
    options: [
      'Run sfc /scannow first, then DISM /RestoreHealth',
      'Run DISM /Online /Cleanup-Image /RestoreHealth first, then sfc /scannow',
      'Run chkdsk first, then sfc /scannow',
      'Run bcdedit first, then sfc /scannow'
    ],
    correct: 1,
    explanation: 'DISM /RestoreHealth repairs the Windows component store — the source that SFC draws on to replace corrupted files. If SFC is run first on a damaged component store, it cannot fix files because its own repair source is corrupted. Always: DISM first → SFC second.'
  },
  {
    id: 78, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'Which Windows edition is the MINIMUM required to join an Active Directory domain?',
    options: ['Windows 10 Home', 'Windows 10 S Mode', 'Windows 10 Pro', 'Any edition'],
    correct: 2,
    explanation: 'Domain join requires Windows Pro, Enterprise, or Education. Windows Home cannot join an Active Directory domain. Home also lacks: Group Policy editor (gpedit.msc), Hyper-V, Remote Desktop host capability, and BitLocker (in Windows 10 Home).'
  },
  {
    id: 79, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'Which Windows Registry root key stores settings for the currently logged-in user?',
    options: ['HKEY_LOCAL_MACHINE', 'HKEY_CURRENT_USER', 'HKEY_CLASSES_ROOT', 'HKEY_CURRENT_CONFIG'],
    correct: 1,
    explanation: 'HKEY_CURRENT_USER (HKCU) contains settings specific to the currently logged-in user: desktop preferences, application settings, mapped drives, and user-specific software configuration. HKEY_LOCAL_MACHINE (HKLM) stores system-wide hardware and software settings.'
  },
  {
    id: 80, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'Which command repairs the boot sector of the Windows system partition?',
    options: ['sfc /scannow', 'bootrec /fixboot', 'diskpart', 'gpupdate /force'],
    correct: 1,
    explanation: 'bootrec /fixboot writes a new boot sector to the active system partition. bootrec /fixmbr repairs the Master Boot Record. bootrec /rebuildbcd rebuilds the Boot Configuration Data store. Run these from WinRE: Advanced Startup → Troubleshoot → Advanced Options → Command Prompt.'
  },
  {
    id: 81, exam: 'core2', domain: 'os', difficulty: 'easy',
    question: 'Which Windows tool displays a visual timeline showing application crashes, Windows failures, and software installs?',
    options: ['Event Viewer', 'Resource Monitor', 'Reliability Monitor', 'Performance Monitor'],
    correct: 2,
    explanation: 'Reliability Monitor (reliabilityhistory.exe) provides a calendar view with a stability score and icons marking failures and installs. It\'s easier than Event Viewer for correlating problems with recent changes. Event Viewer has more detail; Performance Monitor tracks real-time metrics.'
  },
  {
    id: 82, exam: 'core2', domain: 'os', difficulty: 'easy',
    question: 'A Linux administrator needs to install a package on an Ubuntu server. Which command is correct?',
    options: ['yum install packagename', 'dnf install packagename', 'apt install packagename', 'rpm -i packagename'],
    correct: 2,
    explanation: 'Ubuntu and Debian-based Linux use APT: apt install packagename. Fedora/RHEL use DNF (or older YUM): dnf install. openSUSE uses Zypper. rpm is the low-level package tool for Red Hat systems, but it doesn\'t resolve dependencies automatically — use dnf/yum instead.'
  },
  {
    id: 83, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'What command manages the Windows Boot Configuration Data store?',
    options: ['msconfig', 'bootcfg', 'bcdedit', 'diskpart'],
    correct: 2,
    explanation: 'bcdedit (Boot Configuration Data editor) modifies the BCD database that controls Windows boot options. It replaced bootcfg from Windows XP. Use it to: configure Safe Mode, add or delete boot entries, set default OS, and enable test signing. Requires running as Administrator.'
  },
  {
    id: 84, exam: 'core2', domain: 'os', difficulty: 'easy',
    question: 'A macOS user wants to restore a file that was deleted three days ago. Which built-in feature allows this?',
    options: ['FileVault', 'Spotlight', 'Time Machine', 'Keychain Access'],
    correct: 2,
    explanation: 'Time Machine creates hourly, daily, and weekly backups to an external drive. Users can enter the Time Machine interface and browse the backup history to restore individual files from any saved point. FileVault = disk encryption; Spotlight = search; Keychain = password manager.'
  },
  {
    id: 85, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'Which command sets Linux file permissions to rwxr-xr-x for all users?',
    options: ['chmod 644 filename', 'chmod 755 filename', 'chmod 777 filename', 'chmod 700 filename'],
    correct: 1,
    explanation: 'r=4, w=2, x=1. Owner: r+w+x=7; Group: r+x=5; Others: r+x=5. chmod 755. Common values: 644 (rw-r--r-- — typical for files), 755 (rwxr-xr-x — executables and directories), 777 (rwxrwxrwx — avoid, too permissive).'
  },
  {
    id: 86, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'A technician needs to convert a FAT32 volume to NTFS without losing any data. Which command does this?',
    options: ['format D: /fs:ntfs', 'convert D: /fs:ntfs', 'diskpart → format fs=ntfs', 'chkdsk D: /f'],
    correct: 1,
    explanation: 'The convert command performs a non-destructive FAT/FAT32 to NTFS conversion, preserving all existing data. format erases all data. After converting to NTFS, you cannot revert to FAT32 without formatting (and losing data). The system drive conversion requires a reboot.'
  },
  {
    id: 87, exam: 'core2', domain: 'os', difficulty: 'easy',
    question: 'Which Windows feature allows running a Linux environment natively without installing a separate virtual machine?',
    options: ['PowerShell', 'Hyper-V', 'Windows Subsystem for Linux (WSL)', 'Windows Sandbox'],
    correct: 2,
    explanation: 'WSL allows running Linux distributions (Ubuntu, Debian, etc.) natively within Windows. WSL 2 uses a real Linux kernel in a lightweight VM. Install with: wsl --install. Access Linux files from Windows Explorer via \\\\wsl$ and Windows files from Linux at /mnt/c/.'
  },
  {
    id: 88, exam: 'core2', domain: 'os', difficulty: 'easy',
    question: 'What does the gpupdate /force command do?',
    options: [
      'Shows which Group Policy Objects are applied to the current user',
      'Immediately re-applies all Group Policy settings',
      'Reconfigures the system BIOS settings',
      'Repairs corrupted system files'
    ],
    correct: 1,
    explanation: 'gpupdate /force immediately re-applies all Group Policy Objects (GPOs), including those that have not changed. Without /force, only changed policies are reapplied. gpresult /r is the reporting command that shows which GPOs were applied — it does not apply them.'
  },
  {
    id: 89, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'What is the Windows virtual memory pagefile used for?',
    options: [
      'Stores temporary internet browsing files',
      'Provides additional memory capacity by using disk space when physical RAM is exhausted',
      'Stores the hibernation image for fast startup',
      'Caches frequently accessed files for faster loading'
    ],
    correct: 1,
    explanation: 'pagefile.sys acts as an overflow for physical RAM. When RAM is full, Windows pages out less-used memory contents to this file. Disk is much slower than RAM, causing performance degradation. The hibernation file (hiberfil.sys) is separate — it stores RAM contents for fast resume.'
  },
  {
    id: 90, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'What is the difference between a Windows domain and a workgroup?',
    options: [
      'A domain uses peer-to-peer authentication; a workgroup uses a central server',
      'A domain has centralized authentication via Active Directory; a workgroup uses decentralized per-PC accounts',
      'A domain supports only Windows PCs; a workgroup supports mixed OS environments',
      'A workgroup requires a server license; a domain does not'
    ],
    correct: 1,
    explanation: 'Domain: centralized authentication via an Active Directory Domain Controller — single sign-on, central policy (GPO), scalable to thousands of PCs. Workgroup: each PC manages its own user accounts independently — practical for < 10 PCs, simple setup, no central management.'
  },

  // ── CORE 2 · SECURITY ───────────────────────────────────────────────────
  {
    id: 91, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'A user receives an email appearing to come from the CEO, urgently requesting a $50,000 wire transfer to a new vendor. The sender\'s domain is slightly different from the company\'s. What type of attack is this?',
    options: ['Vishing', 'Whaling (Business Email Compromise)', 'Smishing', 'Ransomware'],
    correct: 1,
    explanation: 'Whaling targets executives or impersonates them to authorize fraudulent financial actions — also called Business Email Compromise (BEC). The slightly different spoofed domain is a classic indicator. Vishing uses phone calls; smishing uses SMS; ransomware encrypts files.'
  },
  {
    id: 92, exam: 'core2', domain: 'security', difficulty: 'easy',
    question: 'Which type of malware encrypts a victim\'s files and demands cryptocurrency payment for the decryption key?',
    options: ['Spyware', 'Adware', 'Ransomware', 'Rootkit'],
    correct: 2,
    explanation: 'Ransomware encrypts files and demands payment. Notable examples: WannaCry, CryptoLocker, REvil. Defense: offline backups (3-2-1 rule), system patching, least privilege, user training. Paying the ransom is not recommended — it funds crime and doesn\'t guarantee key delivery.'
  },
  {
    id: 93, exam: 'core2', domain: 'security', difficulty: 'easy',
    question: 'What security principle states that users should be granted only the minimum access rights required to do their job?',
    options: ['Defense in depth', 'Zero trust', 'Principle of least privilege', 'Separation of duties'],
    correct: 2,
    explanation: 'Principle of least privilege: grant the minimum permissions needed — no more. Reduces attack surface (compromised low-privilege account causes limited damage) and limits insider threat impact. Implementation: separate admin and daily-use accounts, RBAC, regular access reviews.'
  },
  {
    id: 94, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'After verifying a malware infection on a workstation, what is the NEXT step in CompTIA\'s malware removal process?',
    options: [
      'Delete all infected files',
      'Quarantine the infected system by disconnecting it from the network',
      'Enable System Restore and create a restore point',
      'Educate the user immediately'
    ],
    correct: 1,
    explanation: 'CompTIA\'s 7-step malware process: 1. Verify symptoms → 2. Quarantine (isolate from network) → 3. Disable System Restore → 4. Remediate → 5. Schedule scans/update → 6. Re-enable System Restore, create restore point → 7. Educate user. Containment (step 2) comes before cleanup.'
  },
  {
    id: 95, exam: 'core2', domain: 'security', difficulty: 'easy',
    question: 'An authenticator app generating time-based one-time passwords (TOTP) represents which authentication factor?',
    options: ['Something you know', 'Something you have', 'Something you are', 'Somewhere you are'],
    correct: 1,
    explanation: '"Something you have" includes physical or digital tokens: hardware keys (YubiKey), authenticator apps (Google Authenticator, Authy), SMS codes, and smart cards. Passwords = "know." Biometrics = "are." Location-based = "somewhere you are."'
  },
  {
    id: 96, exam: 'core2', domain: 'security', difficulty: 'easy',
    question: 'Which wireless security protocol can be cracked in minutes using freely available tools and should never be used?',
    options: ['WPA3', 'WPA2', 'WPA (TKIP)', 'WEP'],
    correct: 3,
    explanation: 'WEP uses RC4 with a 24-bit IV that repeats frequently, allowing statistical analysis to recover the encryption key quickly with tools like Aircrack-ng. WEP is completely broken. Minimum: WPA2-AES with a strong passphrase. WPA3 with SAE is preferred.'
  },
  {
    id: 97, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'What is the purpose of a digital certificate?',
    options: [
      'Encrypts all local disk data automatically',
      'Binds a public key to an identity, verified by a trusted Certificate Authority',
      'Stores passwords securely in a hardware chip',
      'Provides automatic two-factor authentication'
    ],
    correct: 1,
    explanation: 'A digital certificate (X.509 format) cryptographically binds a public key to an entity\'s identity. Signed by a Certificate Authority (CA) whose signature can be verified via the chain of trust (Root CA → Intermediate CA → End entity). Used in HTTPS, S/MIME, and code signing.'
  },
  {
    id: 98, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'Which security strategy uses multiple independent layers so that failure of one control does not compromise the entire system?',
    options: [
      'Zero trust — trust nothing by default',
      'Perimeter security — strong outer boundary',
      'Defense in depth — layered security controls',
      'Air gap — physical isolation'
    ],
    correct: 2,
    explanation: 'Defense in depth uses layers: physical (locks, cameras), network (firewall, IDS/IPS), host (antivirus, host firewall, patching), application (input validation), data (encryption), and human (training). If an attacker bypasses one layer, other layers still provide protection.'
  },
  {
    id: 99, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'A laptop with sensitive PII is stolen. The drive is protected by BitLocker. What is the risk to the data?',
    options: [
      'High — BitLocker can be bypassed with physical access to the hardware',
      'Minimal — BitLocker encryption makes data unreadable without the recovery key or TPM authentication',
      'Medium — the data is readable if the attacker knows the Windows login password',
      'High — BitLocker does not protect data on SSDs'
    ],
    correct: 1,
    explanation: 'BitLocker full-disk encryption protects data at rest. Without the BitLocker recovery key or the TPM + PIN combination, the encrypted drive contents are mathematically unreadable even if physically removed and attached to another system. OS login passwords alone cannot bypass BitLocker.'
  },
  {
    id: 100, exam: 'core2', domain: 'security', difficulty: 'easy',
    question: 'What physical security control uses two interlocking doors to prevent one person from following another through a secured entrance?',
    options: [
      'Network IDS sensor',
      'Mantrap (access control vestibule)',
      'Badge reader',
      'Security camera'
    ],
    correct: 1,
    explanation: 'A mantrap (access control vestibule) requires the first door to close before the second opens. Only one person can pass per authentication event, preventing tailgating. Combined with biometrics or badge readers, it ensures only authorized, individually authenticated individuals enter.'
  },
  {
    id: 101, exam: 'core2', domain: 'security', difficulty: 'easy',
    question: 'Which encryption algorithm does WPA2 use for wireless data protection?',
    options: ['DES', 'RC4/TKIP', 'AES/CCMP', 'MD5'],
    correct: 2,
    explanation: 'WPA2 uses AES (Advanced Encryption Standard) with CCMP (Counter Mode with CBC-MAC Protocol) for data encryption and integrity verification. TKIP (based on RC4) was used by original WPA and is now deprecated. WPA3 uses AES/CCMP or GCMP and adds SAE for key exchange.'
  },
  {
    id: 102, exam: 'core2', domain: 'security', difficulty: 'easy',
    question: 'What is the MOST effective defense against phishing attacks?',
    options: [
      'Antivirus software',
      'Security awareness training for all users',
      'Firewall rules',
      'Frequent mandatory password changes'
    ],
    correct: 1,
    explanation: 'Phishing exploits human psychology, not software vulnerabilities. The most effective defense is training users to recognize indicators: mismatched sender domains, urgency, suspicious links (hover to verify), unexpected attachments. Technical controls (spam filters, MFA) supplement but cannot replace user awareness.'
  },
  {
    id: 103, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'An attacker installs software that secretly records all keystrokes on a PC. What type of malware is this?',
    options: ['Spyware', 'Ransomware', 'Keylogger', 'Rootkit'],
    correct: 2,
    explanation: 'A keylogger specifically records keystroke input to capture credentials, PINs, and sensitive data. While it can be classified as a subset of spyware, "keylogger" is the specific term. Hardware keyloggers (physical devices between keyboard and PC) also exist and require physical access to detect.'
  },
  {
    id: 104, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'A PC sends heavy outbound network traffic at 2 AM when no one is using it. What is the MOST likely explanation?',
    options: [
      'Windows Update downloading patches',
      'The PC is part of a botnet being used remotely by an attacker',
      'The hard drive is failing',
      'A scheduled virus scan is running'
    ],
    correct: 1,
    explanation: 'Unexplained heavy outbound traffic during off-hours is a classic botnet indicator — the system has been compromised and is being remotely controlled (for spam, DDoS, or data exfiltration). Windows Update generates primarily inbound traffic and would appear in Windows Update history. Investigate with TCPView or Wireshark.'
  },
  {
    id: 105, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'Which network authentication standard requires each wireless user to authenticate with their own credentials via a RADIUS server?',
    options: [
      'WPA2-Personal (PSK)',
      'WPA3-Personal (SAE)',
      'WPA2-Enterprise (802.1X)',
      'WEP with MAC filtering'
    ],
    correct: 2,
    explanation: 'WPA2/WPA3-Enterprise uses 802.1X — each user or device authenticates with individual credentials (username/password or certificate) verified by a RADIUS server, which can integrate with Active Directory. WPA-Personal uses a single shared passphrase for all users — no per-user credentials.'
  },

  // ── CORE 2 · SOFTWARE TROUBLESHOOTING ───────────────────────────────────
  {
    id: 106, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'A Windows PC shows a BSOD with stop code IRQL_NOT_LESS_OR_EQUAL immediately after installing a new driver. What is the most likely cause and fix?',
    options: [
      'Insufficient disk space — free up storage',
      'The new driver has a bug and is accessing invalid memory — roll back or uninstall the driver',
      'Hard drive failure — replace the drive',
      'Overheating — clean the cooling system'
    ],
    correct: 1,
    explanation: 'IRQL_NOT_LESS_OR_EQUAL indicates a driver (or kernel component) accessed memory at an improper interrupt level — classic driver bug. Since the BSOD started after a driver install, roll back (Device Manager → Properties → Driver → Roll Back Driver) or uninstall the offending driver.'
  },
  {
    id: 107, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'Task Manager shows Disk usage at 100% constantly. The system is very slow. What are the MOST likely causes?',
    options: [
      'Too many browser tabs open',
      'Failing HDD, Windows Search indexing, malware, or Windows Update activity',
      'Outdated video driver',
      'Low CPU clock speed'
    ],
    correct: 1,
    explanation: 'Constant 100% disk usage causes severe slowdowns. Key causes: failing HDD (run chkdsk, check SMART data), Windows Search indexing (try disabling Search service temporarily), malware doing disk I/O, Windows Update in background. On HDDs, replacement with SSD provides dramatic improvement.'
  },
  {
    id: 108, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'Before removing malware, why must System Restore be disabled?',
    options: [
      'System Restore uses too much disk space during scanning',
      'Infected restore points could reinfect the system after removal',
      'Antivirus tools require System Restore to be off to scan',
      'System Restore conflicts with the Windows Defender service'
    ],
    correct: 1,
    explanation: 'Step 3 of CompTIA\'s malware removal process: disable System Restore. Malware may have created infected restore points — leaving System Restore active risks reinfecting the cleaned system if a user or process rolls back to an infected checkpoint. Re-enable and create a clean restore point after remediation.'
  },
  {
    id: 109, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'A user cannot log into Windows and sees "The user profile service failed the sign-in." What is the most likely cause?',
    options: [
      'Incorrect password entered',
      'Corrupted user profile',
      'Network disconnection on a domain machine',
      'Windows Update failure'
    ],
    correct: 1,
    explanation: '"The user profile service failed the sign-in" means Windows cannot load the user\'s profile (common after a crash during login). Fix: log in as a different admin, rename the corrupted C:\\Users\\[username] folder, delete or rename the corresponding Registry ProfileList key, then log in as the user to create a fresh profile.'
  },
  {
    id: 110, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'Which Sysinternals tool shows EVERY program set to run automatically at Windows startup, including scheduled tasks, browser extensions, and all Registry run keys?',
    options: ['Process Explorer', 'Autoruns', 'TCPView', 'Process Monitor'],
    correct: 1,
    explanation: 'Autoruns is the most comprehensive startup manager available — it scans more startup locations than msconfig, Task Manager, or any other built-in tool. Essential for malware persistence investigation. It can optionally verify entries against VirusTotal. Unsigned or unknown entries stand out clearly.'
  },
  {
    id: 111, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'A laptop shuts down randomly during gaming but works fine for light tasks like web browsing. What should be investigated FIRST?',
    options: [
      'RAM failure — run Memtest86',
      'Hard drive failure — run chkdsk',
      'Thermal overheating — check CPU/GPU temperatures and clean cooling system',
      'Power supply failure'
    ],
    correct: 2,
    explanation: 'Shutdowns that only occur under heavy load (gaming, rendering) but not light use is the classic thermal shutdown symptom — the CPU or GPU reaches a critical temperature threshold and the system shuts off to prevent hardware damage. Monitor temps with HWMonitor; clean vents and heatsink; replace dried thermal paste.'
  },
  {
    id: 112, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    question: 'How do you identify which process is listening on port 443 on a Windows system?',
    options: [
      'Run ipconfig /all',
      'Run netstat -ano and match the PID to Task Manager Details tab',
      'Run tracert to localhost',
      'Check the Windows hosts file'
    ],
    correct: 1,
    explanation: 'netstat -ano shows all connections with the owning PID. Find the entry with port 443, note its PID, then go to Task Manager → Details tab and find the matching PID to identify the process. TCPView (Sysinternals) provides the same information in a live GUI with process names shown directly.'
  },
  {
    id: 113, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'After removing malware, it reappears every time the computer is restarted. Where should the technician look?',
    options: [
      'The Windows temp folder (%TEMP%)',
      'All startup persistence locations: Registry run keys, Task Scheduler, startup folders, and services',
      'The Windows Update cache folder',
      'The browser download history'
    ],
    correct: 1,
    explanation: 'Malware that survives reboots has established persistence. Check all startup mechanisms using Autoruns (Sysinternals): Registry HKLM/HKCU Run keys, startup folders, Windows Task Scheduler, registered services, and browser extensions. Remove all persistence entries before the malware executable itself.'
  },
  {
    id: 114, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    question: 'What is the difference between "End Task" in Task Manager\'s Processes tab vs. "End Process" in the Details tab?',
    options: [
      'They are identical — both immediately kill the process',
      'End Task sends a graceful close request; End Process immediately force-terminates without cleanup',
      'End Task works only on system processes; End Process works only on user applications',
      'End Task saves open documents before closing; End Process moves them to a temp folder'
    ],
    correct: 1,
    explanation: 'End Task sends a WM_CLOSE message, giving the application a chance to save data and exit gracefully. For a hung (not responding) app this may not work. End Process (Details tab) or End Process Tree immediately terminates with no chance to save — guarantees the process dies.'
  },
  {
    id: 115, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'A user reports that a specific application crashes immediately on launch. The OS is otherwise stable. What are the FIRST steps?',
    options: [
      'Reinstall Windows immediately',
      'Check Event Viewer Application log for the crash event, then try repairing or reinstalling the application',
      'Replace the hard drive',
      'Add more RAM'
    ],
    correct: 1,
    explanation: 'Check Event Viewer (Windows Logs → Application) for Event ID 1000 (Application Error) — it names the faulting module, which guides the fix. Then: try the application\'s built-in repair option, reinstall, install required dependencies (.NET, Visual C++), or update the application. OS reinstall is a last resort.'
  },

  // ── CORE 2 · OPERATIONAL PROCEDURES ─────────────────────────────────────
  {
    id: 116, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'Which backup type copies ALL selected data every time it runs, resulting in the fastest restore but using the most storage?',
    options: ['Incremental', 'Differential', 'Full', 'Synthetic full'],
    correct: 2,
    explanation: 'Full backup: copies everything every run — slowest to perform, most storage, but fastest restore (single backup set). Incremental: only changes since last backup — smallest daily backup, slowest restore. Differential: changes since last full — medium storage, faster restore than incremental.'
  },
  {
    id: 117, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'A technician has a full backup from Sunday and daily incremental backups Mon–Thu. To restore to Thursday\'s state, how many backup sets are needed?',
    options: [
      '1 — Thursday incremental only',
      '2 — full backup + Thursday incremental',
      '5 — full + Mon + Tue + Wed + Thu incrementals',
      '2 — full + the latest differential'
    ],
    correct: 2,
    explanation: 'Incremental backups each capture only what changed since the PREVIOUS backup (of any type). To restore to Thursday: Sunday full + Monday incremental + Tuesday incremental + Wednesday incremental + Thursday incremental = 5 sets. This is why differential (only needs full + latest differential) is often preferred for faster restores.'
  },
  {
    id: 118, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'What does RPO (Recovery Point Objective) define?',
    options: [
      'How quickly systems must be restored after an outage',
      'The maximum acceptable amount of data loss measured in time',
      'The priority order for restoring different systems',
      'The physical location of backup media'
    ],
    correct: 1,
    explanation: 'RPO defines maximum tolerable data loss: "How old can the restored data be?" An RPO of 4 hours means backups must run at minimum every 4 hours. RPO drives backup frequency and replication requirements. RTO (Recovery Time Objective) defines how long the business can tolerate downtime.'
  },
  {
    id: 119, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'What should a technician do FIRST before handling any internal computer components?',
    options: [
      'Update the system BIOS',
      'Power down the system, unplug it, and attach an anti-static (ESD) wrist strap to chassis ground',
      'Remove all RAM sticks',
      'Boot to Safe Mode'
    ],
    correct: 1,
    explanation: 'ESD (Electrostatic Discharge) can permanently damage CPUs, RAM, GPUs, and motherboards — even at voltages below human perception. Always power off, unplug, and connect an ESD wrist strap before touching components. Handle boards by edges only and use anti-static bags for storage and transport.'
  },
  {
    id: 120, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'Which UPS type provides the cleanest power with zero switchover time during an outage?',
    options: [
      'Offline/Standby UPS',
      'Line-Interactive UPS',
      'Online/Double-Conversion UPS',
      'Surge protector with battery backup'
    ],
    correct: 2,
    explanation: 'Online/Double-Conversion UPS always runs equipment from the inverter (battery DC → clean AC). The battery is continuously charged by utility power. During an outage, equipment is already running on battery — zero switchover delay. Required for sensitive servers and medical equipment. Most expensive type.'
  },
  {
    id: 121, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'What MUST be included in a change management request before a change can be approved?',
    options: [
      'A complete backup of all user email accounts',
      'A documented rollback plan specifying exactly how to revert if the change fails',
      'Personal approval from every affected user',
      'A list of all IP addresses that will be impacted'
    ],
    correct: 1,
    explanation: 'A rollback plan is mandatory for change management approval. It must define: who has authority to initiate rollback, the exact steps to revert, and the decision deadline. Without it, a failed change may cause extended downtime while scrambling for a recovery path.'
  },
  {
    id: 122, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'Which US regulation specifically protects Protected Health Information (PHI)?',
    options: [
      'PCI-DSS',
      'GDPR',
      'HIPAA',
      'SOX'
    ],
    correct: 2,
    explanation: 'HIPAA (Health Insurance Portability and Accountability Act) protects PHI — any health information linked to an individual (diagnoses, prescriptions, medical records). PCI-DSS covers payment card data. GDPR covers EU citizens\' personal data. SOX covers financial reporting for public companies.'
  },
  {
    id: 123, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'While repairing a PC, a technician accidentally opens a folder containing personal family photos. What is the correct action?',
    options: [
      'Browse through them to understand the user better',
      'Close the folder immediately and access only files necessary for the repair',
      'Copy the photos for safekeeping',
      'Ask the user to delete them before continuing'
    ],
    correct: 1,
    explanation: 'Technician ethics require respecting user privacy at all times. Close any inadvertently opened personal files immediately and proceed only with files relevant to the repair. Never view, copy, discuss, or share personal data encountered during a service call. CompTIA A+ Core 2 tests this standard of professionalism.'
  },
  {
    id: 124, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'What is the 3-2-1 backup rule?',
    options: [
      '3 full backups, 2 offsite locations, 1 cloud provider',
      'Keep 3 copies of data, on 2 different media types, with 1 copy stored offsite or in cloud',
      'Backup every 3 days using 2 media types, retained for 1 year',
      'Run 3 backup jobs, verify 2, archive 1'
    ],
    correct: 1,
    explanation: '3-2-1: 3 total copies (1 primary + 2 backups), on 2 different media types (e.g., internal drive + external HDD or NAS + cloud), with 1 copy offsite. Protects against: single media failure, local disaster (fire/flood), and ransomware that encrypts locally connected backups.'
  },
  {
    id: 125, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'A hard drive containing sensitive customer PII must be decommissioned. Which method BEST ensures the data cannot be recovered?',
    options: [
      'Delete all files and empty the Recycle Bin',
      'Perform a quick format of the drive',
      'Physical shredding or degaussing (for HDDs)',
      'Encrypt the drive, then delete the encryption key'
    ],
    correct: 2,
    explanation: 'Deleting files or formatting removes only file system references — data remains recoverable. Physical shredding reduces the drive to unreadable fragments. Degaussing destroys magnetic data on HDDs/tapes (ineffective on SSDs). For SSDs: cryptographic erasure (ATA Secure Erase) or physical shredding. CompTIA recommends shredding for highest assurance.'
  },

  {
    id: 126, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'What is the difference between a Disaster Recovery Plan (DRP) and a Business Continuity Plan (BCP)?',
    options: [
      'They are identical documents with different names',
      'DRP focuses on restoring IT systems; BCP addresses overall business operations continuity including non-IT processes',
      'DRP is for natural disasters only; BCP is for cyberattacks',
      'BCP is a subset of DRP'
    ],
    correct: 1,
    explanation: 'DRP focuses on restoring IT infrastructure after a disaster. BCP is broader — it ensures all critical business functions continue during/after disruption, including manual processes, alternate work locations, communication plans, and supply chain. DRP is a subset of BCP.'
  },
  {
    id: 127, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'When should a terminated employee\'s network account be disabled?',
    options: [
      'Within one week of departure',
      'At the moment of or before the employee\'s departure from the building',
      'After a 30-day grace period for data retrieval',
      'Only if the employee was in an IT role'
    ],
    correct: 1,
    explanation: 'Account deprovisioning should coincide with (or precede) the employee\'s departure. A disgruntled terminated employee who retains active credentials can exfiltrate data, delete files, or sabotage systems. Least privilege principles apply through to offboarding.'
  },
  {
    id: 128, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'What document must be consulted when working with printer toner cartridges or cleaning solvents?',
    options: [
      'The vendor invoice',
      'The SDS (Safety Data Sheet)',
      'The change management ticket',
      'The acceptable use policy'
    ],
    correct: 1,
    explanation: 'SDS (Safety Data Sheet, formerly MSDS) provides hazard information, first aid, required PPE, and disposal guidance for hazardous materials. OSHA requires SDS accessibility for any hazardous workplace substance. Laser toner is carcinogenic if inhaled in quantity — SDS specifies a respirator/mask.'
  },
  {
    id: 129, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'Which type of UPS provides battery backup PLUS automatic voltage regulation (AVR) to handle brownouts without switching to battery?',
    options: [
      'Offline/Standby UPS',
      'Line-Interactive UPS',
      'Online/Double-Conversion UPS',
      'Basic surge protector with battery'
    ],
    correct: 1,
    explanation: 'Line-Interactive UPS includes an autotransformer (AVR) that corrects undervoltages and overvoltages without switching to battery — extending battery life significantly. Offline/Standby UPS only switches to battery after an outage is detected (~4–8ms delay). Online/Double-Conversion always runs on battery.'
  },
  {
    id: 130, exam: 'core2', domain: 'security', difficulty: 'easy',
    question: 'A caller claiming to be from IT support calls a user and asks for their password to "fix a critical issue." What type of attack is this?',
    options: ['Tailgating', 'Vishing', 'Dumpster diving', 'SQL injection'],
    correct: 1,
    explanation: 'Vishing (voice phishing) uses phone calls to impersonate IT support, banks, or government agencies to extract sensitive information. Legitimate IT departments never ask for passwords. Defense: verify identity through official channels before providing any information, and report the call.'
  },
  {
    id: 131, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'Standard antivirus running in Windows reports no infection, but the user still shows malware symptoms. What tool is MOST appropriate next?',
    options: [
      'Run Windows Defender real-time protection again',
      'Use a bootable offline scanner that runs outside the infected OS',
      'Run Malwarebytes within Windows',
      'Use Task Manager to find the malware process'
    ],
    correct: 1,
    explanation: 'Rootkits and advanced malware can hide from security software running within the infected OS by intercepting system calls. A bootable offline scanner (Windows Defender Offline, Kaspersky Rescue Disk) runs in a clean environment where the malware cannot hide. This is the required approach for rootkit removal.'
  },
  {
    id: 132, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    question: 'What does "Reset this PC — Keep my files" do?',
    options: [
      'Deletes all personal files and reinstalls Windows fresh',
      'Removes third-party apps and settings but keeps personal files (Documents, Pictures, etc.)',
      'Creates a system restore point for future use',
      'Restores from the most recent backup'
    ],
    correct: 1,
    explanation: '"Keep my files" removes installed applications and settings but preserves personal data (files in Documents, Desktop, Pictures, etc.). No installation media required — uses the built-in recovery image. "Remove everything" option performs a full wipe suitable before reselling.'
  },
  {
    id: 133, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'What is the primary purpose of a change management process in IT?',
    options: [
      'To slow down IT work with unnecessary approvals',
      'To control and document changes to IT systems, reducing risk of unauthorized or poorly planned changes causing outages',
      'To track software license compliance',
      'To manage employee performance reviews'
    ],
    correct: 1,
    explanation: 'Change management provides a formal process: request → risk assessment → approval → scheduled implementation → rollback plan → documentation. It prevents unauthorized changes (a leading cause of outages), ensures changes are tested, and creates an audit trail for compliance.'
  },
  {
    id: 134, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'What does an SLA (Service Level Agreement) define?',
    options: [
      'The software licenses an organization is authorized to use',
      'Uptime guarantees, RTO, RPO, response times, and remedies for missed targets',
      'The chain of custody for digital evidence',
      'Physical security requirements for a data center'
    ],
    correct: 1,
    explanation: 'An SLA is a contract specifying measurable service standards: uptime percentage (99.9% = 8.76 hours/year downtime), RTO, RPO, response and resolution time targets, and financial penalties or credits if targets are missed. SLAs drive infrastructure investment decisions.'
  },
  {
    id: 135, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'Why is overwriting (using multiple data-wiping passes) unreliable for data destruction on SSDs?',
    options: [
      'SSDs use NTFS which blocks overwriting',
      'SSDs\' wear-leveling algorithms redirect writes to different cells, leaving original data on cells that weren\'t overwritten',
      'SSDs are too fast for overwriting tools to keep up',
      'Overwriting damages SSD firmware'
    ],
    correct: 1,
    explanation: 'SSD wear-leveling distributes writes across all cells to prolong lifespan. When software tries to overwrite specific logical addresses, the controller may write to new physical cells while old ones retain original data. For SSDs: use ATA Secure Erase (built-in secure erase command) or physical destruction.'
  },
  {
    id: 136, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'What does msconfig\'s "Diagnostic startup" option do?',
    options: [
      'Runs a full hardware diagnostic test suite',
      'Loads only basic Windows services and drivers — disables all third-party services and startup items',
      'Boots into Windows Recovery Environment',
      'Enables verbose boot logging to a text file'
    ],
    correct: 1,
    explanation: 'Diagnostic startup (msconfig → General tab) loads only essential Windows services — no third-party software. If the problem disappears, it\'s caused by third-party software or services. Use "Selective startup" to re-enable items in batches to find the culprit. Remember to restore "Normal startup" after troubleshooting.'
  },
  {
    id: 137, exam: 'core2', domain: 'os', difficulty: 'easy',
    question: 'A technician needs to troubleshoot a driver conflict causing display issues. Which boot option loads Windows with generic drivers, isolating driver problems?',
    options: [
      'Normal startup',
      'Safe Mode',
      'Clean boot via msconfig',
      'Last Known Good Configuration'
    ],
    correct: 1,
    explanation: 'Safe Mode loads Windows with the minimum set of drivers — generic VGA (800×600), basic keyboard/mouse/disk. If the issue doesn\'t occur in Safe Mode, a driver or startup software is the cause. Clean boot (msconfig) uses actual drivers but disables third-party services — used to isolate software conflicts.'
  },
  {
    id: 138, exam: 'core1', domain: 'hardware', difficulty: 'hard',
    question: 'In the laser printing process, which step uses a laser to discharge selected areas of the charged drum, forming a latent image?',
    options: ['Charging', 'Exposing (writing)', 'Developing', 'Transferring'],
    correct: 1,
    explanation: 'Laser printing 7 steps: 1.Processing → 2.Charging (drum uniformly charged) → 3.Exposing (laser discharges image areas) → 4.Developing (toner attracted to discharged areas) → 5.Transferring (toner moves to paper) → 6.Fusing (heat/pressure bonds toner) → 7.Cleaning (drum cleaned for next page). Mnemonic: "Please Call Every Dad For Christmas."'
  },
  {
    id: 139, exam: 'core1', domain: 'hardware', difficulty: 'medium',
    question: 'What are the minimum drives and fault tolerance of RAID 10?',
    options: [
      'Minimum 2 drives, tolerates 1 drive failure',
      'Minimum 3 drives, tolerates 1 drive failure',
      'Minimum 4 drives, tolerates 1 drive failure per mirrored pair',
      'Minimum 4 drives, no fault tolerance'
    ],
    correct: 2,
    explanation: 'RAID 10 (1+0) combines mirroring and striping: minimum 4 drives in mirrored pairs that are then striped. Can tolerate 1 drive failure per mirrored pair (potentially 2 total if they\'re in different pairs). Excellent read performance and good write performance. Usable capacity: 50% of total drives.'
  },
  {
    id: 140, exam: 'core1', domain: 'networking', difficulty: 'medium',
    question: 'A network technician is troubleshooting: can ping loopback (127.0.0.1) but NOT the default gateway. Which OSI layers should be investigated?',
    options: [
      'Layer 7 — Application',
      'Layer 4 — Transport',
      'Layers 1 and 2 — Physical and Data Link',
      'Layer 3 — Network'
    ],
    correct: 2,
    explanation: 'Loopback success means TCP/IP stack (Layer 3+) is functional. Inability to reach the gateway (1 hop away, same subnet) indicates a problem at Layer 1 (cable unplugged, NIC hardware) or Layer 2 (incorrect MAC, VLAN mismatch, switch port issue). Layer 3 configuration is not the issue if the gateway address itself is correct.'
  },
  {
    id: 141, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'Which of the following correctly describes dumpster diving as an attack method?',
    options: [
      'Flooding a network with packets to cause denial of service',
      'Searching discarded trash for useful information such as documents, hardware, or credentials',
      'Observing a user\'s screen to capture sensitive information',
      'Sending fraudulent SMS messages to trick users'
    ],
    correct: 1,
    explanation: 'Dumpster diving involves searching physically discarded materials for sensitive information: printed documents, old hardware (with data), sticky notes with passwords, org charts, or account statements. Mitigations: shred all documents, use locked shred bins, wipe hardware before disposal, enforce clean-desk policy.'
  },
  {
    id: 142, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'In a data center hot/cold aisle configuration, where does cold supply air enter the servers?',
    options: [
      'Through the rear (exhaust side) of the servers',
      'From the ceiling, distributed evenly across all aisles',
      'Through the front (intake side) of servers facing the cold aisle',
      'From the sides of the server racks'
    ],
    correct: 2,
    explanation: 'Cold aisle: server fronts face each other; cold air is delivered from perforated floor tiles (or overhead) into server intake (front). Hot aisle: server rears face each other; hot exhaust air is captured and returned to CRAC units. Containment prevents hot and cold air from mixing, improving efficiency.'
  },
  {
    id: 143, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    question: 'A user hears a repetitive clicking sound from their hard drive and cannot access files. What should be done FIRST?',
    options: [
      'Run chkdsk /f to repair the file system',
      'Defragment the drive to resolve the clicking',
      'Immediately attempt to back up any accessible data — the drive is mechanically failing',
      'Replace the SATA cable'
    ],
    correct: 2,
    explanation: 'The "click of death" — a repetitive clicking from an HDD — indicates mechanical failure: the read/write head is repeatedly failing to find its target. Data recovery likelihood decreases rapidly. Stop using the drive immediately and attempt to copy accessible data. Professional recovery services may be needed for physically damaged drives.'
  },
  {
    id: 144, exam: 'core2', domain: 'security', difficulty: 'easy',
    question: 'What is a key indicator that an email may be a phishing attempt?',
    options: [
      'The email arrives during business hours',
      'The sender domain is slightly different from the legitimate organization\'s domain',
      'The email contains a company logo',
      'The email requests a reply'
    ],
    correct: 1,
    explanation: 'Attackers register look-alike domains (paypa1.com, company-support.net) for phishing. Always hover over links to check the actual destination URL and verify the sender\'s full email address (not just the display name). Other indicators: urgency/threats, generic greetings, unexpected attachments, grammar errors.'
  },
  {
    id: 145, exam: 'core2', domain: 'os', difficulty: 'easy',
    question: 'What is Windows Defender (Microsoft Defender Antivirus) and when is it active?',
    options: [
      'A third-party antivirus that must be purchased separately',
      'A built-in antivirus/anti-malware included with Windows 10/11, active by default and free',
      'A tool only for enterprises with Microsoft 365 subscriptions',
      'A firewall tool that only monitors network traffic'
    ],
    correct: 1,
    explanation: 'Microsoft Defender Antivirus is built into Windows 10 and 11 — free, automatically updated, and considered adequate for most users. It provides real-time protection, cloud-delivered detection, scheduled scans, and Windows Defender Offline (bootable) scan capability. It auto-disables when a third-party AV is installed.'
  },
  {
    id: 146, exam: 'core1', domain: 'networking', difficulty: 'easy',
    question: 'What connector type is used for standard Ethernet cable (Cat5e/Cat6)?',
    options: ['RJ-11', 'RJ-45', 'LC fiber', 'F-type coaxial'],
    correct: 1,
    explanation: 'RJ-45 is the 8-pin modular connector used for Ethernet cables. RJ-11 is the 6-pin (4 or 2 conductor) connector used for telephone lines. LC and SC are fiber optic connectors. F-type is a coaxial connector used for cable TV and older internet connections.'
  },
  {
    id: 147, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'easy',
    question: 'After a driver update, a device begins malfunctioning. What is the FASTEST way to resolve this?',
    options: [
      'Reinstall Windows',
      'Roll back the driver in Device Manager → Properties → Driver → Roll Back Driver',
      'Replace the hardware device',
      'Update the BIOS'
    ],
    correct: 1,
    explanation: 'Roll Back Driver reverts to the previously installed driver version instantly. It\'s available only if a previous driver was saved (the button is grayed out if not). If Roll Back is unavailable, uninstall the current driver and manually install the older version downloaded from the manufacturer\'s website.'
  },
  {
    id: 148, exam: 'core2', domain: 'operational', difficulty: 'medium',
    question: 'Which of the following is a benefit of formal IT asset management?',
    options: [
      'Automatically patches all devices',
      'Enables software license compliance auditing and prevents "shadow IT" unmanaged devices',
      'Replaces the need for a ticketing system',
      'Eliminates the need for data backups'
    ],
    correct: 1,
    explanation: 'Asset management tracks every device and software license: what you own, where it is, who uses it, and when warranties expire. Key benefits: software license compliance (avoid fines/audits), identifying unmanaged devices (security risk), hardware refresh planning, and evidence for insurance claims.'
  },
  {
    id: 149, exam: 'core1', domain: 'hardware', difficulty: 'easy',
    question: 'Which connector supplies power to the processor (CPU) on a modern ATX motherboard?',
    options: ['24-pin ATX connector', '8-pin EPS (CPU) connector', '6-pin PCIe connector', 'SATA power connector'],
    correct: 1,
    explanation: 'The 8-pin EPS12V (or 4-pin ATX12V on older boards) CPU power connector supplies dedicated 12V power to the processor. The 24-pin ATX connector powers the motherboard generally. PCIe 6/8-pin connectors power graphics cards. Missing the CPU power connector = system won\'t boot (no fans, or fans spin but no POST).'
  },
  {
    id: 150, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'What is split tunneling in a VPN context?',
    options: [
      'Using two separate VPN connections simultaneously',
      'Routing only specific traffic (e.g., corporate) through the VPN while other traffic goes directly to internet',
      'Splitting a VPN connection between two ISPs for redundancy',
      'Encrypting VPN traffic with two different algorithms'
    ],
    correct: 1,
    explanation: 'Split tunneling routes designated traffic (corporate resources) through the encrypted VPN tunnel while all other traffic (streaming, general browsing) goes directly to the internet without VPN. Full-tunnel VPN routes ALL traffic through the VPN. Split tunneling reduces VPN bandwidth load but may pose security risks for non-tunneled traffic.'
  },
  {
    id: 151, exam: 'core2', domain: 'os', difficulty: 'medium',
    question: 'Which diskpart command sequence is used to format a partition as NTFS with quick format?',
    options: [
      'diskpart → format C: /fs:ntfs',
      'diskpart → select partition N → format fs=ntfs quick',
      'diskpart → convert ntfs',
      'diskpart → create volume ntfs'
    ],
    correct: 1,
    explanation: 'Correct diskpart sequence: diskpart → list disk → select disk N → list partition → select partition N → format fs=ntfs quick. The quick flag skips the full scan (sector testing). Omit quick for a full format that checks for bad sectors. Note: format here is the diskpart subcommand, not the standalone format.exe.'
  },
  {
    id: 152, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'What is the correct way to dispose of old CRT monitors and laptop batteries?',
    options: [
      'Place them in the regular office trash',
      'Take them to a certified e-waste recycler or manufacturer take-back program',
      'Bury them in an approved landfill',
      'Disassemble them and keep the metal components'
    ],
    correct: 1,
    explanation: 'CRT monitors contain lead; laptop batteries contain lithium and other hazardous materials. Both are e-waste that cannot legally be placed in regular trash in most jurisdictions. Options: certified e-waste recyclers (R2 or e-Stewards certified), manufacturer take-back programs, retail drop-offs (Best Buy, Staples), or municipal hazardous waste collection events.'
  },
  {
    id: 153, exam: 'core1', domain: 'hw-troubleshooting', difficulty: 'medium',
    question: 'What does the "paperclip test" on a power supply verify?',
    options: [
      'That the PSU can deliver full wattage under load',
      'That the PSU\'s fan is working',
      'That the PSU will power on at all when shorted PS_ON to Ground on the 24-pin connector',
      'That all voltage rails are within specification'
    ],
    correct: 2,
    explanation: 'The paperclip test shorts pin 16 (PS_ON — green wire) to any ground (black wire) on the 24-pin connector with the PSU unplugged from the motherboard. If the PSU fan spins when plugged in, the PSU powers on. It does NOT verify voltages or load capacity — use a PSU tester or multimeter for that.'
  },
  {
    id: 154, exam: 'core2', domain: 'security', difficulty: 'medium',
    question: 'Which of the following is an example of a "something you are" authentication factor?',
    options: [
      'A hardware token (RSA SecurID)',
      'A PIN number',
      'A fingerprint scanner',
      'A smart card'
    ],
    correct: 2,
    explanation: '"Something you are" = biometrics: fingerprint, facial recognition, iris scan, voice recognition, retinal scan, hand geometry. Hardware token and smart card = "something you have." PIN = "something you know." True MFA combines factors from different categories.'
  },
  {
    id: 155, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'What information is essential to include in a service ticket for proper documentation?',
    options: [
      'Only the problem description and resolution',
      'User contact info, problem description, steps taken, root cause, solution applied, parts used, and time spent',
      'Just the technician\'s notes for personal reference',
      'The user\'s system password for future access'
    ],
    correct: 1,
    explanation: 'Complete ticket documentation enables: knowledge base building, SLA tracking, recurring issue identification, audits, and handoff to other technicians. Essential fields: requestor info, problem description, investigation steps, findings, root cause, resolution, parts replaced (with serials), time spent, and closure date.'
  },
  {
    id: 156, exam: 'core1', domain: 'mobile', difficulty: 'medium',
    question: 'A user wants to display their iPhone screen on a compatible Samsung smart TV wirelessly. Which technology enables this?',
    options: ['NFC', 'Bluetooth', 'AirPlay / screen mirroring', 'USB tethering'],
    correct: 2,
    explanation: 'Screen mirroring (AirPlay on iOS, Miracast on Android, or device-specific protocols) wirelessly streams the device display to a compatible TV or receiver. NFC has too short a range. Bluetooth lacks the bandwidth for video. USB tethering shares data, not the screen.'
  },
  {
    id: 157, exam: 'core2', domain: 'os', difficulty: 'easy',
    question: 'Where in Windows Task Manager can you disable a program from automatically starting with Windows?',
    options: ['Processes tab', 'Performance tab', 'Startup tab', 'Details tab'],
    correct: 2,
    explanation: 'The Startup tab (added in Windows 8) lists programs that launch at login and their measured startup impact. Right-click → Disable to prevent a program from starting automatically. Enabled programs can also be managed in msconfig → Startup tab (which redirects to Task Manager in Windows 8+).'
  },
  {
    id: 158, exam: 'core2', domain: 'security', difficulty: 'hard',
    question: 'What is a zero-day vulnerability, and why is it particularly dangerous?',
    options: [
      'A vulnerability in software that is zero days old (brand new software)',
      'A known vulnerability for which the vendor has had zero days to respond to your report',
      'A vulnerability unknown to the vendor with no existing patch — attackers can exploit it before any defense is available',
      'A vulnerability that causes data loss within zero days of exploitation'
    ],
    correct: 2,
    explanation: 'A zero-day is a vulnerability unknown to the software vendor — zero days have passed since the vendor found out, meaning no patch exists. Attackers (nation-states, criminal groups) exploit these silently. Defense: defense-in-depth, behavioral IPS, network segmentation, and least privilege — since you cannot patch what\'s unknown.'
  },
  {
    id: 159, exam: 'core2', domain: 'operational', difficulty: 'easy',
    question: 'How should a technician handle a situation where a customer becomes angry and begins shouting?',
    options: [
      'Match the customer\'s energy to show urgency',
      'End the call or visit immediately',
      'Remain calm, let the customer finish, empathize, and focus on the solution',
      'Offer a full refund immediately to de-escalate'
    ],
    correct: 2,
    explanation: 'Professional conduct: remain calm regardless of the customer\'s tone, allow them to express frustration without interruption, acknowledge their feelings ("I understand this is frustrating"), then redirect to solving the problem. Escalate if needed — never argue or become defensive. Document the interaction.'
  },
  {
    id: 160, exam: 'core2', domain: 'sw-troubleshooting', difficulty: 'medium',
    question: 'DISM /Online /Cleanup-Image /RestoreHealth fails with "Source files could not be found." What should be tried next?',
    options: [
      'Run sfc /scannow immediately',
      'Reinstall Windows immediately',
      'Provide a local Windows source using /Source switch: DISM /Online /Cleanup-Image /RestoreHealth /Source:wim:D:\\sources\\install.wim:1',
      'Delete the System32 folder and rebuild'
    ],
    correct: 2,
    explanation: 'DISM /RestoreHealth normally downloads repair files from Windows Update. If internet access or Windows Update is unavailable, provide a local source from a Windows installation ISO or USB: DISM /Online /Cleanup-Image /RestoreHealth /Source:wim:path\\install.wim:1. The ":1" specifies the image index inside the WIM file.'
  }

];
const GLOSSARY = [

  // ── PORTS & PROTOCOLS ───────────────────────────────────────────────────
  { term:'FTP', fullName:'File Transfer Protocol', port:'20/21 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Transfers files between a client and server. Port 20 carries data; port 21 carries control commands. Transmits in plaintext — replaced by SFTP (port 22) or FTPS (port 990) for secure transfers.',
    relatedTerms:['SFTP','TFTP','SSH'] },

  { term:'SSH', fullName:'Secure Shell', port:'22 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Provides encrypted remote terminal access, file transfer (SFTP/SCP), and tunneling. Replaced Telnet (plaintext). Uses public-key or password authentication. Default port 22.',
    relatedTerms:['Telnet','SFTP','FTP'] },

  { term:'Telnet', fullName:'Teletype Network', port:'23 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Legacy remote terminal protocol that transmits all data — including passwords — in plaintext. Replaced by SSH for all modern use. Still referenced on the A+ exam as what SSH superseded.',
    relatedTerms:['SSH'] },

  { term:'SMTP', fullName:'Simple Mail Transfer Protocol', port:'25 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Sends email between mail servers (server-to-server). Port 25 for relay; port 587 for client-to-server submission (with STARTTLS). SMTPS uses port 465 (deprecated). Does not retrieve mail — use POP3 or IMAP for that.',
    relatedTerms:['POP3','IMAP','SMTPS'] },

  { term:'DNS', fullName:'Domain Name System', port:'53 TCP/UDP', exam:'core1', category:'Ports & Protocols',
    definition:'Translates human-readable domain names (google.com) to IP addresses. UDP port 53 for standard queries; TCP port 53 for zone transfers and large responses. Without DNS, users must use raw IP addresses.',
    relatedTerms:['DHCP','nslookup','APIPA'] },

  { term:'DHCP', fullName:'Dynamic Host Configuration Protocol', port:'67/68 UDP', exam:'core1', category:'Ports & Protocols',
    definition:'Automatically assigns IP address, subnet mask, default gateway, and DNS server to devices. DORA process: Discover → Offer → Request → Acknowledge. Server uses port 67; client receives on port 68. Uses UDP because client has no IP yet.',
    relatedTerms:['DNS','APIPA','ipconfig'] },

  { term:'TFTP', fullName:'Trivial File Transfer Protocol', port:'69 UDP', exam:'core1', category:'Ports & Protocols',
    definition:'Simplified, unauthenticated file transfer over UDP. No directory listing, no authentication. Used for: booting network devices (PXE boot), uploading router/switch firmware, and booting thin clients. Not for general use due to lack of security.',
    relatedTerms:['FTP','PXE'] },

  { term:'HTTP', fullName:'Hypertext Transfer Protocol', port:'80 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Foundation of web communication — transfers web pages, images, and data between browsers and servers. Unencrypted (plaintext). All modern sites should use HTTPS (port 443) instead. Port 80 traffic should be redirected to 443.',
    relatedTerms:['HTTPS','SSL/TLS'] },

  { term:'POP3', fullName:'Post Office Protocol version 3', port:'110 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Downloads email from a mail server to a client device and typically deletes it from the server. Suitable for single-device access. POP3S (encrypted) uses port 995. Compare to IMAP, which synchronizes email across multiple devices.',
    relatedTerms:['IMAP','SMTP'] },

  { term:'NTP', fullName:'Network Time Protocol', port:'123 UDP', exam:'core1', category:'Ports & Protocols',
    definition:'Synchronizes computer clocks over a network. Accurate time is critical for: authentication (Kerberos requires clocks within 5 minutes), log correlation, certificate validity, and scheduled tasks. Stratum 0 = atomic clock; stratum 1 = directly synchronized to stratum 0.',
    relatedTerms:['Active Directory','Kerberos'] },

  { term:'IMAP', fullName:'Internet Message Access Protocol', port:'143 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Retrieves and synchronizes email while keeping messages on the server. Supports multiple devices accessing the same mailbox. IMAPS (encrypted) uses port 993. Preferred over POP3 for modern multi-device use.',
    relatedTerms:['POP3','SMTP'] },

  { term:'SNMP', fullName:'Simple Network Management Protocol', port:'161/162 UDP', exam:'core1', category:'Ports & Protocols',
    definition:'Monitors and manages network devices (routers, switches, servers). Port 161: agents receive queries. Port 162: manager receives traps (unsolicited alerts from devices). SNMPv3 adds authentication and encryption. SNMPv1/v2 use community strings in plaintext.',
    relatedTerms:['Network Management','Traps'] },

  { term:'LDAP', fullName:'Lightweight Directory Access Protocol', port:'389 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Queries and modifies directory services like Active Directory. Used for user authentication and authorization lookups. LDAP over SSL/TLS (LDAPS) uses port 636 for encrypted directory communication.',
    relatedTerms:['Active Directory','LDAPS'] },

  { term:'HTTPS', fullName:'HTTP Secure', port:'443 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'HTTP encrypted by TLS. Provides confidentiality, server authentication, and integrity. Required for all sites handling sensitive data. The padlock icon in browsers indicates a valid TLS certificate. TLS 1.2 and 1.3 are current standards.',
    relatedTerms:['HTTP','TLS','SSL'] },

  { term:'SMB', fullName:'Server Message Block', port:'445 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Microsoft protocol for network file sharing, printer sharing, and inter-process communication. Used by Windows file shares (\\\\server\\share). SMB1 has critical vulnerabilities (EternalBlue/WannaCry) — disable it. SMB2 and SMB3 are secure. Also uses NetBIOS ports 137-139 on older systems.',
    relatedTerms:['NetBIOS','RDP','Windows File Sharing'] },

  { term:'LDAPS', fullName:'LDAP over SSL/TLS', port:'636 TCP', exam:'core1', category:'Ports & Protocols',
    definition:'Encrypted version of LDAP using SSL/TLS. Protects directory service queries and authentication traffic from eavesdropping. Required when transmitting credentials over untrusted networks. Configured with a valid certificate on the directory server.',
    relatedTerms:['LDAP','Active Directory'] },

  { term:'RDP', fullName:'Remote Desktop Protocol', port:'3389 TCP', exam:'core2', category:'Ports & Protocols',
    definition:'Microsoft protocol for graphical remote desktop access. Requires Windows Pro/Enterprise to host. Secured with Network Level Authentication (NLA). Common attack vector — should be behind VPN or use strong MFA. Port 3389 is frequently targeted by brute-force bots.',
    relatedTerms:['VPN','Remote Access','NLA'] },

  { term:'SIP', fullName:'Session Initiation Protocol', port:'5060 TCP/UDP', exam:'core1', category:'Ports & Protocols',
    definition:'Establishes, modifies, and terminates VoIP (Voice over IP) and multimedia sessions. Used by IP phones, softphones, and video conferencing. SIPS (encrypted) uses port 5061. RTP carries the actual audio/video stream.',
    relatedTerms:['VoIP','RTP'] },

  // ── NETWORKING ──────────────────────────────────────────────────────────
  { term:'APIPA', fullName:'Automatic Private IP Addressing', exam:'core1', category:'Networking',
    definition:'Windows assigns a 169.254.x.x address (from 169.254.0.0/16) when no DHCP server responds. APIPA devices can communicate with other APIPA devices on the same subnet but have NO internet access. Always indicates a DHCP failure.',
    relatedTerms:['DHCP','ipconfig','Subnet Mask'] },

  { term:'NAT', fullName:'Network Address Translation', exam:'core1', category:'Networking',
    definition:'Maps private (RFC 1918) IP addresses to one or more public IP addresses for internet communication. Enables IPv4 address conservation. The router maintains a translation table. PAT (Port Address Translation) is the most common form — many devices share one public IP using different source ports.',
    relatedTerms:['Private IP','Public IP','Default Gateway'] },

  { term:'VLAN', fullName:'Virtual Local Area Network', exam:'core1', category:'Networking',
    definition:'Logically segments a physical switch infrastructure into separate broadcast domains. Devices in different VLANs cannot communicate without routing. Configured on managed switches. Provides security segmentation (separate guest from corporate), reduces broadcast traffic, and enables logical grouping independent of physical location.',
    relatedTerms:['Switch','Trunk Port','Inter-VLAN Routing'] },

  { term:'PoE', fullName:'Power over Ethernet', exam:'core1', category:'Networking',
    definition:'Delivers DC power to devices through standard Ethernet cabling alongside data. Standards: 802.3af (PoE, 15.4W), 802.3at (PoE+, 30W), 802.3bt (PoE++, 60–100W). Powers: IP phones, WAPs, security cameras, IoT devices. PoE switch has a total power budget — plan carefully.',
    relatedTerms:['802.3af','802.3at','Switch'] },

  { term:'TCP', fullName:'Transmission Control Protocol', exam:'core1', category:'Networking',
    definition:'Connection-oriented protocol providing reliable, ordered, error-checked delivery. Uses three-way handshake (SYN → SYN-ACK → ACK). Retransmits lost packets. Used for: HTTP, HTTPS, FTP, SMTP, SSH. Slower than UDP due to overhead. Operates at OSI Layer 4.',
    relatedTerms:['UDP','OSI Model','Three-Way Handshake'] },

  { term:'UDP', fullName:'User Datagram Protocol', exam:'core1', category:'Networking',
    definition:'Connectionless protocol — no handshake, no guarantee of delivery or order, minimal overhead. Used for: DNS, DHCP, TFTP, SNMP, NTP, streaming media, VoIP, online gaming. Faster than TCP. Application layer handles error correction if needed.',
    relatedTerms:['TCP','DNS','DHCP'] },

  { term:'ARP', fullName:'Address Resolution Protocol', exam:'core1', category:'Networking',
    definition:'Resolves a known IPv4 address to an unknown MAC address within the same subnet. Broadcasts "Who has IP x.x.x.x?" — the owner replies with its MAC address. Results cached in the ARP table. arp -a displays the table. ARP spoofing is a MITM attack vector.',
    relatedTerms:['MAC Address','IP Address','arp -a'] },

  { term:'Subnet Mask', exam:'core1', category:'Networking',
    definition:'A 32-bit number that divides an IP address into network and host portions. Written as dotted decimal (255.255.255.0) or CIDR prefix (/24). /24 = 255.255.255.0 = 256 addresses (254 usable hosts). AND operation with IP address reveals the network address.',
    relatedTerms:['CIDR','Default Gateway','IP Address'] },

  { term:'Default Gateway', exam:'core1', category:'Networking',
    definition:'The router interface on the local subnet that forwards packets destined for other networks. Every host must have a default gateway configured (or learned via DHCP) to reach the internet. Troubleshoot by pinging the gateway first when internet connectivity fails.',
    relatedTerms:['Router','Subnet Mask','NAT'] },

  { term:'MAC Address', fullName:'Media Access Control Address', exam:'core1', category:'Networking',
    definition:'A 48-bit (6-byte) hardware address burned into every NIC at manufacture. Typically written as 6 hex pairs (AA:BB:CC:DD:EE:FF). First 3 bytes = OUI (manufacturer). Last 3 bytes = device-specific. Operates at OSI Layer 2. Used by ARP and switches for local forwarding.',
    relatedTerms:['ARP','Switch','OSI Model'] },

  // ── HARDWARE ────────────────────────────────────────────────────────────
  { term:'PCIe', fullName:'Peripheral Component Interconnect Express', exam:'core1', category:'Hardware',
    definition:'High-speed serial expansion bus for connecting GPUs, NVMe SSDs, and other high-bandwidth cards. Versions: PCIe 3.0 (8 GT/s per lane), PCIe 4.0 (16 GT/s), PCIe 5.0 (32 GT/s). Slots: x1, x4, x8, x16. NVMe x4 PCIe 3.0 ≈ 3.5 GB/s; PCIe 4.0 ≈ 7 GB/s.',
    relatedTerms:['NVMe','GPU','M.2'] },

  { term:'DDR4', fullName:'Double Data Rate 4 SDRAM', exam:'core1', category:'Hardware',
    definition:'Desktop RAM standard. Speeds: 2133–3200 MHz standard (higher with XMP). Voltage: 1.2V. 288-pin DIMM connector (different notch position from DDR3). Succeeded by DDR5 (4800+ MHz, 1.1V, 288-pin with different keying). Incompatible with DDR3 or DDR5 slots.',
    relatedTerms:['DDR5','SO-DIMM','Dual-channel','ECC RAM'] },

  { term:'NVMe', fullName:'Non-Volatile Memory Express', exam:'core1', category:'Hardware',
    definition:'Storage protocol designed for SSDs using the PCIe bus. Bypasses AHCI/SATA bottleneck, dramatically reducing latency (microseconds vs milliseconds for HDD). PCIe 3.0 x4 ≈ 3.5 GB/s; PCIe 4.0 x4 ≈ 7 GB/s. Available in M.2 form factor or PCIe add-in card.',
    relatedTerms:['M.2','PCIe','SATA','SSD'] },

  { term:'M.2', exam:'core1', category:'Hardware',
    definition:'Compact storage/device form factor. 22mm wide, common lengths: 2242, 2260, 2280 (most common), 22110. Key types: B-key (SATA or PCIe x2), M-key (PCIe x4 or SATA), B+M-key (compatible with both slots). Used for NVMe SSDs, SATA SSDs, Wi-Fi cards, and cellular modems.',
    relatedTerms:['NVMe','SATA','PCIe'] },

  { term:'ECC RAM', fullName:'Error-Correcting Code RAM', exam:'core1', category:'Hardware',
    definition:'RAM with extra chips that detect and correct single-bit memory errors in real time. Used in servers and workstations where data integrity is critical. More expensive than standard RAM. Requires ECC-capable CPU and motherboard. Prevents silent data corruption.',
    relatedTerms:['DDR4','Server','Workstation'] },

  { term:'UEFI', fullName:'Unified Extensible Firmware Interface', exam:'core1', category:'Hardware',
    definition:'Modern replacement for legacy BIOS. Advantages: supports disks > 2 TB (GPT required), faster boot (no 16-bit real mode), Secure Boot (verifies bootloader signature), mouse support in setup, network capabilities. Backward compatible with BIOS-based OSes via CSM (Compatibility Support Module).',
    relatedTerms:['BIOS','Secure Boot','GPT','POST'] },

  { term:'POST', fullName:'Power-On Self Test', exam:'core1', category:'Hardware',
    definition:'Hardware diagnostic run by BIOS/UEFI at every power-on. Tests CPU, RAM, storage controllers, keyboard, and basic peripherals. Failure: beep codes (AMI/Phoenix BIOS), diagnostic LED arrays (modern boards), or error message on screen. Success: one short beep (AMI) or no beep (UEFI).',
    relatedTerms:['BIOS','UEFI','Beep Codes'] },

  { term:'Thermal Paste', exam:'core1', category:'Hardware',
    definition:'Thermally conductive compound (also called TIM — Thermal Interface Material) applied between CPU heat spreader and heatsink. Fills microscopic surface gaps where air (poor conductor) would otherwise trap heat. Dried/missing thermal paste is a primary cause of CPU overheating. Reapply when removing a heatsink.',
    relatedTerms:['CPU Cooler','Heatsink','Overheating'] },

  { term:'TPM', fullName:'Trusted Platform Module', exam:'both', category:'Hardware',
    definition:'Dedicated security microchip soldered to the motherboard. Stores cryptographic keys, measures boot integrity, supports BitLocker (Core 2) and Windows Hello. TPM 2.0 is required for Windows 11. Enable in UEFI/BIOS if disabled. Provides hardware root of trust.',
    relatedTerms:['BitLocker','Secure Boot','UEFI'] },

  // ── STORAGE ─────────────────────────────────────────────────────────────
  { term:'SMART', fullName:'Self-Monitoring, Analysis and Reporting Technology', exam:'core1', category:'Storage',
    definition:'Built-in diagnostic system in HDDs and SSDs that monitors health attributes: reallocated sectors, pending sectors, uncorrectable read errors, spin retry count. Tools: CrystalDiskInfo, HD Tune, manufacturer utilities (SeaTools, WD Diagnostics). Any reallocated or pending sectors = back up immediately and replace drive.',
    relatedTerms:['HDD','SSD','chkdsk'] },

  { term:'RAID 0', fullName:'Redundant Array of Independent Disks — Level 0', exam:'core1', category:'Storage',
    definition:'Striping: data split across all drives simultaneously. Best read/write performance of any RAID level. Zero fault tolerance — any single drive failure destroys all data. Min 2 drives. Usable capacity: 100% of total. Use: scratch disks, video editing, gaming (where speed > redundancy).',
    relatedTerms:['RAID 1','RAID 5','RAID 10'] },

  { term:'RAID 1', fullName:'Redundant Array of Independent Disks — Level 1', exam:'core1', category:'Storage',
    definition:'Mirroring: data written identically to all drives simultaneously. Tolerates failure of all but one drive. Min 2 drives. Usable capacity: 50% (one drive worth). Good read performance (can read from either drive); write same as single drive. Use: OS drives, critical data requiring simple redundancy.',
    relatedTerms:['RAID 0','RAID 5','RAID 10'] },

  { term:'RAID 5', fullName:'Redundant Array of Independent Disks — Level 5', exam:'core1', category:'Storage',
    definition:'Striping with distributed parity. Data and parity spread across all drives — no single dedicated parity drive. Tolerates 1 drive failure. Min 3 drives. Usable capacity: (n-1)/n. Good read performance; write slower due to parity calculations. Common in NAS devices.',
    relatedTerms:['RAID 6','RAID 10','Parity'] },

  { term:'RAID 6', fullName:'Redundant Array of Independent Disks — Level 6', exam:'core1', category:'Storage',
    definition:'Striping with double distributed parity. Tolerates 2 simultaneous drive failures. Min 4 drives. Usable capacity: (n-2)/n. Good read performance; slowest write (two parity calculations). Use: environments where drive replacement time is long or rebuild risk is high.',
    relatedTerms:['RAID 5','RAID 10'] },

  { term:'RAID 10', fullName:'Redundant Array of Independent Disks — Level 10 (1+0)', exam:'core1', category:'Storage',
    definition:'Combines mirroring (RAID 1) and striping (RAID 0). Mirrors pairs of drives, then stripes across pairs. Min 4 drives. Tolerates 1 failure per mirrored pair (potentially 2 total). Usable capacity: 50%. Excellent read and write performance. Use: high-performance, high-availability databases.',
    relatedTerms:['RAID 0','RAID 1','RAID 5'] },

  // ── DISPLAY & VIDEO ─────────────────────────────────────────────────────
  { term:'OLED', fullName:'Organic Light-Emitting Diode', exam:'both', category:'Display & Video',
    definition:'Display technology where each pixel generates its own light. True black (pixel off), infinite contrast ratio, wide color gamut, fast response times. Weakness: potential burn-in with static content, more expensive, shorter lifespan than LCD. Used in high-end phones, TVs, and laptops.',
    relatedTerms:['IPS','TN','VA','LCD'] },

  { term:'IPS', fullName:'In-Plane Switching', exam:'both', category:'Display & Video',
    definition:'LCD panel technology offering the best color accuracy and widest viewing angles of LCD types. No color shift when viewed from the side. Slower response times than TN (though modern IPS can match). Used in professional monitors, laptops, and tablets.',
    relatedTerms:['TN','VA','OLED'] },

  { term:'TN', fullName:'Twisted Nematic', exam:'both', category:'Display & Video',
    definition:'Oldest and fastest LCD panel technology. Fastest response times (1ms), lowest cost. Weaknesses: poor viewing angles (color shifts when viewed off-center), inferior color reproduction. Historically favored for competitive gaming due to low latency.',
    relatedTerms:['IPS','VA','OLED'] },

  { term:'DisplayPort', exam:'core1', category:'Display & Video',
    definition:'High-bandwidth digital display interface by VESA. Advantages over HDMI: supports higher resolutions/refresh rates at release, Multi-Stream Transport (daisy-chain multiple monitors), generally royalty-free. DisplayPort 1.4: 32.4 Gbps. DisplayPort 2.0: 77.4 Gbps. Can carry audio. Common on PCs and gaming monitors.',
    relatedTerms:['HDMI','VGA','DVI'] },

  { term:'HDMI', fullName:'High-Definition Multimedia Interface', exam:'core1', category:'Display & Video',
    definition:'Consumer A/V interface for TVs, monitors, and projectors. Carries uncompressed digital video and audio. HDMI 2.0: 18 Gbps (4K@60Hz). HDMI 2.1: 48 Gbps (4K@120Hz, 8K@60Hz). Most TVs and many monitors use HDMI. Does not natively support daisy-chaining.',
    relatedTerms:['DisplayPort','VGA','DVI'] },

  // ── MOBILE & WIRELESS ───────────────────────────────────────────────────
  { term:'NFC', fullName:'Near Field Communication', exam:'core1', category:'Mobile & Wireless',
    definition:'Short-range wireless standard (max ~10 cm) operating at 13.56 MHz. Used for: contactless payments (Apple Pay, Google Pay), transit cards, device pairing, access cards. Passive mode: NFC tag powered by the reader field. Active mode: both devices powered.',
    relatedTerms:['Bluetooth','RFID','Qi'] },

  { term:'MDM', fullName:'Mobile Device Management', exam:'core1', category:'Mobile & Wireless',
    definition:'Software platform enabling IT to manage and secure mobile devices. Can enforce: passcode/biometric lock, full-disk encryption, remote wipe, app deployment/restriction, VPN profiles, Wi-Fi configurations. Used for corporate-owned devices and BYOD. Examples: Microsoft Intune, Jamf, VMware Workspace ONE.',
    relatedTerms:['BYOD','Containerization','eSIM'] },

  { term:'Qi', exam:'core1', category:'Mobile & Wireless',
    definition:'Dominant wireless charging standard by the Wireless Power Consortium. Inductive charging at 5–15W (Qi 1.x) or up to 15W+ (Qi2). Used by Apple, Samsung, and most Android phones. Pads and devices must both be Qi-compatible. Not interoperable with older competing standards (PMA, AirFuel).',
    relatedTerms:['NFC','MagSafe'] },

  { term:'802.11ax', fullName:'Wi-Fi 6 / Wi-Fi 6E', exam:'core1', category:'Mobile & Wireless',
    definition:'Latest mainstream Wi-Fi standard. Max theoretical speed: 9.6 Gbps. Uses OFDMA for more efficient multi-device handling, TWT (Target Wake Time) for IoT battery efficiency. Wi-Fi 6 = 2.4 + 5 GHz; Wi-Fi 6E adds 6 GHz band (more channels, less congestion). Required for WPA3.',
    relatedTerms:['802.11ac','WPA3','OFDMA'] },

  { term:'Bluetooth', exam:'core1', category:'Mobile & Wireless',
    definition:'Short-range wireless standard (typically 10–30m) operating at 2.4 GHz. Pairs devices for audio (headphones, speakers), HID (keyboards, mice), file transfer, and IoT. Bluetooth 5.x: 2 Mbps, 4× range of 4.x. Bluetooth Low Energy (BLE): for sensors and beacons with minimal power use.',
    relatedTerms:['NFC','Wi-Fi','Wireless'] },

  // ── SECURITY ────────────────────────────────────────────────────────────
  { term:'Ransomware', exam:'core2', category:'Security',
    definition:'Malware that encrypts victim files and demands payment (usually cryptocurrency) for the decryption key. Spreads via phishing, RDP brute force, exploited vulnerabilities. Defense: offline 3-2-1 backups, patching, least privilege, user training. Never guaranteed to receive key even if ransom is paid.',
    relatedTerms:['Malware','Phishing','3-2-1 Backup','Encryption'] },

  { term:'Phishing', exam:'core2', category:'Security',
    definition:'Social engineering attack via fraudulent emails/websites mimicking trusted sources to steal credentials or deliver malware. Spear phishing = targeted (uses personal details). Whaling = targets executives. Indicators: wrong sender domain, urgency, suspicious links, unexpected attachments.',
    relatedTerms:['Spear Phishing','Whaling','Social Engineering','Vishing'] },

  { term:'Rootkit', exam:'core2', category:'Security',
    definition:'Malware providing privileged access while actively hiding its presence from the OS, users, and security software. Runs at or below OS level — can intercept system calls. Extremely difficult to detect and remove. Requires a bootable offline scanner (not a scan running within the infected OS) or a full reinstall.',
    relatedTerms:['Malware','Bootkit','Offline Scanner'] },

  { term:'Social Engineering', exam:'core2', category:'Security',
    definition:'Manipulating people psychologically to divulge information or take actions compromising security. Exploits: authority, urgency, reciprocity, fear, helpfulness. Attacks: phishing, vishing, smishing, tailgating, pretexting. Most effective attack vector because it bypasses technical controls.',
    relatedTerms:['Phishing','Vishing','Tailgating','Security Awareness Training'] },

  { term:'MFA', fullName:'Multi-Factor Authentication', exam:'core2', category:'Security',
    definition:'Requires two or more different authentication factors (know/have/are). Dramatically reduces account compromise risk — stolen password alone is insufficient. TOTP apps (Authy, Google Authenticator) are more secure than SMS. Hardware keys (YubiKey) are the most phishing-resistant form.',
    relatedTerms:['Authentication','TOTP','Password'] },

  { term:'AES', fullName:'Advanced Encryption Standard', exam:'core2', category:'Security',
    definition:'Symmetric block cipher with 128-bit block size. Key sizes: 128, 192, 256 bits. AES-256 considered unbreakable with current technology. Used in: WPA2/WPA3, BitLocker, TLS, VPNs. Hardware acceleration (AES-NI) in modern CPUs makes it extremely fast. Replaced DES and 3DES.',
    relatedTerms:['WPA2','WPA3','BitLocker','Encryption','RSA'] },

  { term:'VPN', fullName:'Virtual Private Network', exam:'core2', category:'Security',
    definition:'Encrypts traffic between a client and VPN server, creating a secure tunnel over untrusted networks. Types: Remote access (user to network), Site-to-site (network to network). Protocols: IPsec, SSL/TLS, WireGuard. Split tunneling: only selected traffic uses VPN. Full tunnel: all traffic through VPN.',
    relatedTerms:['IPsec','TLS','Encryption','Remote Access'] },

  { term:'WPA3', fullName:'Wi-Fi Protected Access 3', exam:'core2', category:'Security',
    definition:'Current wireless security standard. Uses SAE (Simultaneous Authentication of Equals / Dragonfly) for key exchange — eliminates offline dictionary attacks even with weak passwords, provides forward secrecy. WPA3-Enterprise uses 192-bit security suite. Required for Wi-Fi 6 (802.11ax) certification.',
    relatedTerms:['WPA2','SAE','AES','802.11ax'] },

  { term:'Zero-day', exam:'core2', category:'Security',
    definition:'A software vulnerability unknown to the vendor with no available patch. "Zero days" to prepare. Attackers (nation-states, criminal groups) may keep these secret for maximum impact. Defense: defense-in-depth, behavioral IPS, network segmentation, least privilege — you cannot patch the unknown.',
    relatedTerms:['Vulnerability','Patch Management','Defense in Depth'] },

  { term:'Least Privilege', exam:'core2', category:'Security',
    definition:'Security principle: grant users and processes only the minimum permissions required to perform their function — no more. Reduces blast radius of compromises, limits insider threat damage, and reduces malware spread. Implementation: separate daily and admin accounts, RBAC, regular access reviews.',
    relatedTerms:['RBAC','Defense in Depth','UAC'] },

  { term:'Defense in Depth', exam:'core2', category:'Security',
    definition:'Layered security strategy: if one control fails, others continue to protect. Layers: physical (locks, mantraps), network (firewall, IDS/IPS), host (AV, host firewall), application (input validation), data (encryption), human (training). No single control is relied upon exclusively.',
    relatedTerms:['Firewall','IDS','IPS','Encryption'] },

  { term:'Tailgating', exam:'core2', category:'Security',
    definition:'Physical attack where an unauthorized person follows an authorized person through a secured entrance without using their own credentials. Piggybacking: the authorized person is aware and allows it. Both are security violations. Mitigation: mantraps, security training, turnstiles, challenging unknown individuals.',
    relatedTerms:['Mantrap','Physical Security','Social Engineering'] },

  // ── CLOUD & VIRTUALIZATION ───────────────────────────────────────────────
  { term:'IaaS', fullName:'Infrastructure as a Service', exam:'core1', category:'Cloud & Virtualization',
    definition:'Provides virtualized compute, storage, and networking. Customer manages OS, middleware, and applications. Provider manages physical hardware and hypervisor. Examples: AWS EC2, Azure VMs, Google Compute Engine. Most flexible; most customer responsibility.',
    relatedTerms:['PaaS','SaaS','Cloud Computing'] },

  { term:'PaaS', fullName:'Platform as a Service', exam:'core1', category:'Cloud & Virtualization',
    definition:'Provides a managed development and deployment platform — OS, runtime, middleware, and frameworks managed by provider. Developer uploads application code only. Examples: Heroku, Azure App Service, Google App Engine. Frees developers from infrastructure management.',
    relatedTerms:['IaaS','SaaS','FaaS'] },

  { term:'SaaS', fullName:'Software as a Service', exam:'core1', category:'Cloud & Virtualization',
    definition:'Complete applications delivered over the internet — user just needs a browser or thin client. Provider manages everything. Examples: Microsoft 365, Salesforce, Google Workspace, Dropbox. Least customer responsibility; least flexibility. Subscription model typically.',
    relatedTerms:['IaaS','PaaS','Cloud Computing'] },

  { term:'Hypervisor', exam:'core1', category:'Cloud & Virtualization',
    definition:'Software that creates and manages virtual machines. Type 1 (bare-metal): runs directly on hardware — VMware ESXi, Hyper-V, Xen. Better performance, production use. Type 2 (hosted): runs as application on a host OS — VirtualBox, VMware Workstation, Parallels. Easier setup, development use.',
    relatedTerms:['VM','VDI','IaaS'] },

  { term:'VM Snapshot', fullName:'Virtual Machine Snapshot', exam:'core1', category:'Cloud & Virtualization',
    definition:'Point-in-time capture of a VM\'s disk state, memory contents, and configuration. Fast to create and revert. Used before risky changes — if something breaks, revert in seconds. NOT a backup: stored on same datastore (destroyed if storage fails), performance degrades as snapshots accumulate.',
    relatedTerms:['Hypervisor','VM Backup','Live Migration'] },

  // ── OPERATING SYSTEMS ────────────────────────────────────────────────────
  { term:'NTFS', fullName:'New Technology File System', exam:'core2', category:'Operating Systems',
    definition:'Default Windows file system. Supports: file/folder permissions (ACLs), EFS encryption, compression, journaling (crash recovery), symbolic links, files of virtually unlimited size. Required for: BitLocker, EFS, NTFS permissions. Convert FAT32 → NTFS with "convert D: /fs:ntfs" (non-destructive).',
    relatedTerms:['FAT32','exFAT','BitLocker','EFS'] },

  { term:'BitLocker', exam:'core2', category:'Operating Systems',
    definition:'Windows full-disk encryption. Encrypts entire volume including OS — data unreadable if drive is removed. Requires TPM 1.2+ (or USB key) and Windows Pro/Enterprise. Recovery key must be saved before enabling. Managed via Control Panel or Group Policy. XTS-AES-128 or 256-bit.',
    relatedTerms:['TPM','EFS','NTFS','Encryption'] },

  { term:'EFS', fullName:'Encrypting File System', exam:'core2', category:'Operating Systems',
    definition:'File/folder-level encryption built into NTFS. Encrypts using the user\'s certificate — only that user (and a designated recovery agent) can decrypt. Unlike BitLocker, encrypts specific files while OS boots normally. If certificate is lost (profile corruption, reinstall), encrypted files are permanently inaccessible.',
    relatedTerms:['BitLocker','NTFS','Certificate'] },

  { term:'BSOD', fullName:'Blue Screen of Death', exam:'core2', category:'Operating Systems',
    definition:'Windows critical kernel error causing immediate system halt to prevent hardware damage. Shows: stop code name and number, sometimes the faulting module. Minidump saved to C:\\Windows\\Minidump. Analyze with WinDbg or NirSoft WhoCrashed. Common causes: bad driver, RAM failure, hardware malfunction.',
    relatedTerms:['Stop Error','Minidump','Driver','RAM'] },

  { term:'SFC', fullName:'System File Checker', exam:'core2', category:'Operating Systems',
    definition:'Windows command-line tool (sfc /scannow) that scans all protected system files and replaces corrupted/missing ones from the component store. Run as Administrator. Log: %WinDir%\\Logs\\CBS\\CBS.log. Run DISM /RestoreHealth FIRST if SFC reports it cannot fix files — the component store itself may be corrupted.',
    relatedTerms:['DISM','Windows Repair','System Files'] },

  { term:'DISM', fullName:'Deployment Image Servicing and Management', exam:'core2', category:'Operating Systems',
    definition:'Repairs the Windows component store — the source that SFC uses. Key command: DISM /Online /Cleanup-Image /RestoreHealth (downloads fixes from Windows Update). Run before SFC when SFC fails. Also: adds/removes Windows features, mounts/services WIM images offline, prepares deployment images.',
    relatedTerms:['SFC','Windows Repair','WIM'] },

  { term:'Safe Mode', exam:'core2', category:'Operating Systems',
    definition:'Windows diagnostic boot mode loading only essential drivers (generic VGA, basic keyboard/mouse/disk). If problem absent in Safe Mode: caused by a driver or startup software. Types: Safe Mode (minimal), Safe Mode with Networking, Safe Mode with Command Prompt. Access: Shift+Restart → Startup Settings, or msconfig Boot tab.',
    relatedTerms:['Clean Boot','msconfig','Driver'] },

  { term:'Group Policy', exam:'core2', category:'Operating Systems',
    definition:'Windows infrastructure for centralized configuration management across domain-joined computers. GPOs define settings for: security, desktop, software installation, scripts, and registry. Requires Active Directory domain. Applied to OUs, domains, or sites. gpupdate /force applies immediately; gpresult /r shows applied policies.',
    relatedTerms:['Active Directory','gpupdate','gpresult','Domain'] },

  { term:'Registry', exam:'core2', category:'Operating Systems',
    definition:'Windows hierarchical database storing OS, hardware, and application settings. Root keys: HKLM (hardware/system-wide), HKCU (current user), HKCR (file associations), HKU (all users), HKCC (current hardware profile). Edit: regedit.exe (admin). Always export/backup before editing — changes can prevent Windows from booting.',
    relatedTerms:['regedit','HKLM','HKCU','HKCR'] },

  // ── TROUBLESHOOTING ──────────────────────────────────────────────────────
  { term:'CompTIA Troubleshooting Steps', exam:'both', category:'Troubleshooting',
    definition:'CompTIA\'s 6-step methodology: 1. Identify the problem. 2. Establish a theory of probable cause (Occam\'s Razor). 3. Test the theory. 4. Establish a plan of action and implement. 5. Verify full functionality; implement preventive measures. 6. Document findings, actions, and outcomes. Mnemonic: "I Every Tech Eats Vegetables Daily."',
    relatedTerms:['Documentation','Root Cause'] },

  { term:'Memtest86', exam:'both', category:'Troubleshooting',
    definition:'Bootable, OS-independent RAM diagnostic tool. Runs extensive test patterns over multiple passes (full test: 3–8 hours). Any error = faulty RAM. Gold standard for memory testing. More thorough than Windows Memory Diagnostic. Download from memtest86.com; write to USB and boot.',
    relatedTerms:['RAM','BSOD','POST'] },

  { term:'chkdsk', fullName:'Check Disk', exam:'core2', category:'Troubleshooting',
    definition:'Windows command to check and repair file system errors. chkdsk C: = read-only scan. /f = fix errors. /r = locate bad sectors + recover data (implies /f). System drive scan scheduled for next reboot. Results in Event Viewer → Application (Source: Wininit). Run before suspecting OS issues.',
    relatedTerms:['SFC','SMART','Disk Management'] },

  { term:'ipconfig', exam:'both', category:'Troubleshooting',
    definition:'Windows command showing network adapter configuration. ipconfig: IP address, subnet mask, default gateway. ipconfig /all: adds MAC address, DHCP/DNS server, lease info. ipconfig /release: releases DHCP lease. ipconfig /renew: requests new lease. ipconfig /flushdns: clears DNS cache.',
    relatedTerms:['ping','DNS','DHCP','APIPA'] },

  // ── OPERATIONAL PROCEDURES ───────────────────────────────────────────────
  { term:'SLA', fullName:'Service Level Agreement', exam:'core2', category:'Operational Procedures',
    definition:'Contract defining measurable service quality standards: uptime percentage (99.9% ≈ 8.76 hours downtime/year), RTO, RPO, response times, resolution times, and financial remedies for missed targets. Drives infrastructure investment and staffing decisions. Agreed between service provider and customer.',
    relatedTerms:['RTO','RPO','Change Management'] },

  { term:'RTO', fullName:'Recovery Time Objective', exam:'core2', category:'Operational Procedures',
    definition:'Maximum acceptable time to restore a service after an outage. Drives investment in redundancy and failover infrastructure. Example: RTO = 4 hours means systems must be operational within 4 hours of an outage. Lower RTO = more expensive infrastructure. Defined in DRP and SLA.',
    relatedTerms:['RPO','DRP','BCP','SLA'] },

  { term:'RPO', fullName:'Recovery Point Objective', exam:'core2', category:'Operational Procedures',
    definition:'Maximum acceptable data loss measured in time. If RPO = 4 hours, backups must run at least every 4 hours. Drives backup frequency and replication requirements. Example: daily backups = RPO of 24 hours (could lose a full day of data). Lower RPO = more frequent backups/replication.',
    relatedTerms:['RTO','Backup Types','DRP'] },

  { term:'ESD', fullName:'Electrostatic Discharge', exam:'both', category:'Operational Procedures',
    definition:'Sudden static electricity discharge that can permanently damage electronic components — even at voltages below human perception (30V vs. detection threshold of ~3,000V). Prevention: anti-static wrist strap connected to chassis ground, ESD mat, handle boards by edges, anti-static bags, maintain 40–60% humidity.',
    relatedTerms:['Anti-static Wrist Strap','ESD Bag','Component Handling'] },

  { term:'Chain of Custody', exam:'core2', category:'Operational Procedures',
    definition:'Documentation proving who had possession and control of digital evidence at every point from collection through legal proceedings. Required for evidence to be admissible in court. Includes: collection method (write blocker for disk images), tamper-evident packaging, transfer logs, secure storage.',
    relatedTerms:['Digital Forensics','Incident Response','Evidence'] },

  { term:'Change Management', exam:'core2', category:'Operational Procedures',
    definition:'Formal process controlling IT system changes: change request → risk/impact assessment → approval → scheduled implementation → rollback plan → testing/verification → documentation. Prevents unauthorized changes, undocumented changes, and unplanned outages. Required by SOX, PCI-DSS, HIPAA, and ISO 27001.',
    relatedTerms:['Rollback Plan','Documentation','SLA'] },

  { term:'PII', fullName:'Personally Identifiable Information', exam:'core2', category:'Operational Procedures',
    definition:'Any data that can identify an individual: name, SSN, address, phone number, email, DOB, biometric data, IP address. Must be protected with encryption, access controls, and proper disposal. Breaches require notification under many laws (GDPR, state breach notification laws). Minimize collection and retention.',
    relatedTerms:['PHI','GDPR','Data Retention','Encryption'] },

  { term:'PHI', fullName:'Protected Health Information', exam:'core2', category:'Operational Procedures',
    definition:'Medical information linked to an individual: diagnoses, prescriptions, treatment records, insurance information. Regulated by HIPAA in the US. Requires: encryption, access logging, minimum necessary access, business associate agreements (BAAs) for third parties. Breach notification within 60 days required.',
    relatedTerms:['HIPAA','PII','Encryption'] },

  { term:'3-2-1 Backup Rule', exam:'core2', category:'Operational Procedures',
    definition:'Best-practice backup strategy: maintain 3 total copies of data (1 primary + 2 backups), on 2 different media types, with 1 copy stored offsite or in cloud. Protects against: single drive failure, local disaster (fire/flood), and ransomware encrypting locally-connected backups.',
    relatedTerms:['RTO','RPO','Incremental Backup','Differential Backup'] },

  // ── PRINTING ────────────────────────────────────────────────────────────
  { term:'Laser Printing Process', exam:'both', category:'Printing',
    definition:'Seven steps: 1. Processing (RIP), 2. Charging (drum uniformly charged ~-600V), 3. Exposing (laser discharges image areas), 4. Developing (toner adheres to exposed areas), 5. Transferring (paper given charge to attract toner), 6. Fusing (heat+pressure bonds toner), 7. Cleaning (drum residual toner removed). Mnemonic: "Please Call Every Dad For Christmas."',
    relatedTerms:['Fuser','Drum Cartridge','Toner','Transfer Roller'] },

  { term:'Fuser Assembly', exam:'both', category:'Printing',
    definition:'Laser printer component that permanently bonds toner to paper using heat (150–200°C) and pressure rollers. Primary failure symptoms: toner smears when touched (insufficient heat), paper jams in fuser area (worn rollers), plastic/burning smell (overheating fuser). Most common laser printer maintenance replacement.',
    relatedTerms:['Laser Printing Process','Toner','Drum Cartridge'] },

  { term:'Drum Cartridge', exam:'both', category:'Printing',
    definition:'Photosensitive cylinder in a laser printer that holds the electrostatic latent image. Laser selectively discharges areas; toner adheres to discharged zones. Failure symptoms: vertical black lines or streaks (scratched drum), ghost images (drum not fully cleaned/discharged), white vertical lines (dirty drum).',
    relatedTerms:['Laser Printing Process','Toner','Fuser Assembly'] },

  // ── POWER & ENVIRONMENTAL ───────────────────────────────────────────────
  { term:'UPS', fullName:'Uninterruptible Power Supply', exam:'both', category:'Power & Environmental',
    definition:'Battery backup device providing power during outages. Types: Offline/Standby (basic, ~4ms switchover), Line-Interactive (adds AVR for brownout protection), Online/Double-Conversion (zero switchover, always runs on battery/inverter, cleanest power). Sizing: calculate wattage of connected devices + runtime needed.',
    relatedTerms:['Surge Protector','Volt-Ampere','Power Budget'] },

  { term:'Hot/Cold Aisle', exam:'core2', category:'Power & Environmental',
    definition:'Data center airflow management. Cold aisle: server fronts face each other; cold air delivered from perforated floor tiles into server intake. Hot aisle: server rears face each other; hot exhaust captured and returned to CRAC units. Containment (physical barriers) prevents cold/hot air mixing — improves cooling efficiency 30–40%.',
    relatedTerms:['CRAC','Data Center','Environmental Controls'] }

];
const CHEAT_SHEETS = {

  // ── PORTS ────────────────────────────────────────────────────────────────
  ports: {
    headers: ['Service', 'Port(s)', 'Protocol', 'Notes'],
    highlightCols: [1],
    amberCols: [2],
    rows: [
      ['FTP Data',          '20',       'TCP', 'Active-mode data transfer'],
      ['FTP Control',       '21',       'TCP', 'Commands; FTPS also uses 21 with TLS'],
      ['SSH / SFTP / SCP',  '22',       'TCP', 'Encrypted shell, file transfer, tunneling'],
      ['Telnet',            '23',       'TCP', 'Plaintext remote terminal — replaced by SSH'],
      ['SMTP',              '25',       'TCP', 'Server-to-server mail relay'],
      ['SMTP Submission',   '587',      'TCP', 'Client-to-server with STARTTLS'],
      ['DNS',               '53',    'TCP/UDP', 'UDP for queries (<512 B); TCP for zone transfers'],
      ['DHCP Server',       '67',      'UDP', 'Server listens; broadcasts from client'],
      ['DHCP Client',       '68',      'UDP', 'Client port for DHCP responses'],
      ['TFTP',              '69',      'UDP', 'Trivial FTP — no auth, used for PXE boot/configs'],
      ['HTTP',              '80',      'TCP', 'Unencrypted web traffic'],
      ['POP3',              '110',     'TCP', 'Retrieves email; deletes from server by default'],
      ['POP3S',             '995',     'TCP', 'POP3 over TLS'],
      ['NTP',               '123',     'UDP', 'Time synchronization — critical for Kerberos'],
      ['NetBIOS',           '137-139', 'TCP/UDP', 'Legacy Windows name resolution/sessions'],
      ['IMAP',              '143',     'TCP', 'Email retrieval; keeps messages on server'],
      ['IMAPS',             '993',     'TCP', 'IMAP over TLS'],
      ['SNMP',              '161',     'UDP', 'Agent receives queries on 161'],
      ['SNMP Trap',         '162',     'UDP', 'Agent sends unsolicited alerts to manager'],
      ['LDAP',              '389',     'TCP/UDP', 'Active Directory / directory lookups'],
      ['HTTPS',             '443',     'TCP', 'HTTP over TLS — standard encrypted web'],
      ['SMB / CIFS',        '445',     'TCP', 'Windows file/printer sharing; replace NetBIOS'],
      ['LDAPS',             '636',     'TCP', 'LDAP over TLS'],
      ['RDP',               '3389',    'TCP', 'Remote Desktop Protocol — Windows remote GUI'],
      ['SIP',               '5060',    'TCP/UDP', 'VoIP call setup (signaling); 5061 for TLS'],
      ['RTP',               '5004/5005','UDP', 'Real-time voice/video media stream'],
    ]
  },

  // ── WIRELESS ─────────────────────────────────────────────────────────────
  wireless: {
    headers: ['Standard', 'Alias', 'Freq (GHz)', 'Max Speed', 'Range (indoor)', 'Key Feature'],
    highlightCols: [0],
    amberCols: [3],
    rows: [
      ['802.11a',  'Wi-Fi 1', '5',       '54 Mbps',    '~35 m',  'First 5 GHz standard; limited range'],
      ['802.11b',  'Wi-Fi 2', '2.4',     '11 Mbps',    '~45 m',  'First widely adopted; DSSS modulation'],
      ['802.11g',  'Wi-Fi 3', '2.4',     '54 Mbps',    '~45 m',  'OFDM; backward-compatible with b'],
      ['802.11n',  'Wi-Fi 4', '2.4 / 5', '600 Mbps',   '~70 m',  'MIMO antennas; 40 MHz channels'],
      ['802.11ac', 'Wi-Fi 5', '5',       '3.5 Gbps',   '~35 m',  'MU-MIMO; 80/160 MHz; beamforming'],
      ['802.11ax', 'Wi-Fi 6/6E', '2.4 / 5 / 6', '9.6 Gbps', '~35 m', 'OFDMA; BSS coloring; 6 GHz band'],
      ['Bluetooth 5', '—',   '2.4',     '2 Mbps',      '~40 m',  '4× range of BT 4; LE audio'],
      ['NFC',      '—',      '13.56 MHz HF', '<0.5 Mbps', '~4 cm', 'Tap-to-pay; peer-to-peer; card emulation'],
      ['Zigbee',   '—',      '2.4 / 915 MHz', '250 Kbps', '~10 m', 'IoT mesh; low power; IEEE 802.15.4'],
      ['Z-Wave',   '—',      '908 MHz (US)', '100 Kbps', '~30 m', 'Smart home mesh; less interference than 2.4 GHz'],
    ]
  },

  // ── CABLES ───────────────────────────────────────────────────────────────
  cables: {
    headers: ['Cable Type', 'Speed', 'Max Distance', 'Connector', 'Notes'],
    highlightCols: [0],
    amberCols: [1],
    rows: [
      ['Cat 5',        '100 Mbps',   '100 m', 'RJ-45', 'Legacy; 100BASE-TX; 2 pairs used'],
      ['Cat 5e',       '1 Gbps',     '100 m', 'RJ-45', 'Reduced crosstalk; standard gigabit'],
      ['Cat 6',        '1 Gbps (10G <55m)', '100 m (55 m for 10G)', 'RJ-45', 'Spline separator; 250 MHz'],
      ['Cat 6A',       '10 Gbps',    '100 m', 'RJ-45', 'Augmented; 500 MHz; bulkier jacket'],
      ['Cat 7',        '10 Gbps',    '100 m', 'GG-45 / TERA', 'Shielded pairs + overall shield; not TIA-standard'],
      ['Cat 8',        '25/40 Gbps', '30 m',  'RJ-45', 'Data center; 2000 MHz; S/FTP shielding'],
      ['Single-Mode Fiber', '100+ Gbps', '40+ km', 'LC / SC / ST', 'Yellow jacket; 9µm core; laser source; long haul'],
      ['Multimode Fiber',   '10 Gbps', '550 m (OM4)', 'LC / SC / ST', 'Aqua/orange jacket; 50/62.5µm core; LED/VCSEL'],
      ['Coax (RG-6)',  '≥1 Gbps', '180 m cable TV', 'F-connector', 'Cable TV, internet, satellite'],
      ['Coax (RG-59)', 'Analog video', '~230 m', 'BNC / F', 'CCTV; older cable TV'],
      ['Plenum Cable', 'Same as rated', 'Same', 'Same', 'Low-smoke, fire-retardant; required in air spaces'],
      ['USB 3.2 Gen 1', '5 Gbps', '~3 m', 'USB-A/B/C', 'SuperSpeed; blue ports'],
      ['USB 3.2 Gen 2', '10 Gbps', '~3 m', 'USB-C/A', 'SuperSpeed+; typically USB-C'],
      ['USB 3.2 Gen 2×2', '20 Gbps', '~1 m', 'USB-C', 'Dual-lane; USB-C only'],
      ['Thunderbolt 3/4', '40 Gbps', '0.5–2 m (passive)', 'USB-C', 'Also carries DisplayPort + PCIe + power'],
    ]
  },

  // ── CONNECTORS ───────────────────────────────────────────────────────────
  connectors: {
    headers: ['Connector', 'Type', 'Pins/Size', 'Common Use'],
    highlightCols: [0],
    amberCols: [1],
    rows: [
      ['RJ-11',         'Copper / Modular', '6P2C / 6P4C', 'Telephone (POTS); DSL modem line'],
      ['RJ-45',         'Copper / Modular', '8P8C',        'Ethernet (Cat5–Cat8); most common network jack'],
      ['F-Type',        'Coax / Threaded',  'Threaded',    'Cable TV, satellite, cable modems'],
      ['BNC',           'Coax / Bayonet',   'Bayonet',     'CCTV, legacy 10BASE-2 Ethernet, RF test equipment'],
      ['LC',            'Fiber / Small',    '1.25 mm ferrule', 'Dominant SFP/SFP+ fiber connector; snap latch'],
      ['SC',            'Fiber / Square',   '2.5 mm ferrule', 'Push-pull; common in older fiber runs'],
      ['ST',            'Fiber / Round',    '2.5 mm ferrule', 'Bayonet twist; legacy multimode'],
      ['MT-RJ',         'Fiber / Duplex',   'Duplex in 1',  'Small form factor; 2 fibers in 1 connector'],
      ['USB Type-A',    'USB / Rectangular','4 / 9 pins',   'Host side; downstream ports on PC/charger'],
      ['USB Type-B',    'USB / Square',     '4 / 9 pins',   'Device side; printers, older peripherals'],
      ['USB Micro-B',   'USB / Micro',      '5 / 10 pins',  'Older Android, charging, Raspberry Pi older'],
      ['USB Type-C',    'USB / Oval',       '24 pins',      'Reversible; USB3.2/4, Thunderbolt 3/4, DP Alt'],
      ['HDMI Type A',   'Video / Full',     '19 pins',      'Standard; 4K/8K HDR; ARC/eARC audio return'],
      ['HDMI Type C',   'Video / Mini',     '19 pins',      'Mini HDMI; camcorders, tablets'],
      ['HDMI Type D',   'Video / Micro',    '19 pins',      'Micro HDMI; small cameras, some phones'],
      ['DisplayPort',   'Video / DP',       '20 pins',      'PC monitors; daisy-chain MST; HBR3/UHBR'],
      ['Mini DisplayPort','Video / Mini DP','20 pins',      'Older MacBooks; Thunderbolt 1/2 port'],
      ['VGA (DE-15)',    'Video / Analog',   '15 pins (3×5)','Legacy analog video; up to 1080p (limited)'],
      ['DVI-D',          'Video / Digital',  '24+1 pins',    'Digital only; no analog; HDCP support'],
      ['DVI-I',          'Video / Integrated','29 pins',     'Digital + analog; can drive VGA with adapter'],
      ['SATA',           'Storage / Data',   '7 pins data',  'Internal HDD/SSD up to 600 MB/s (SATA III)'],
      ['eSATA',          'Storage / External','7 pins',       'External SATA; faster than USB2 but no power'],
      ['M.2 (M-key)',    'Storage / PCIe',   '5 pins slot',  'NVMe SSD via PCIe x4; also SATA M.2'],
      ['Molex 4-pin',    'Power / Legacy',   '4 pins',       'Older IDE drives, fans, case lighting'],
      ['SATA Power',     'Power / Storage',  '15 pins',      'Powers SATA HDD/SSD/ODD'],
      ['ATX 24-pin',     'Power / Mainboard','24 pins',      'Main motherboard power connector'],
      ['EPS 8-pin',      'Power / CPU',      '8 pins',       'CPU/ATX12V; may split to 4+4 for older boards'],
    ]
  },

  // ── RAID ─────────────────────────────────────────────────────────────────
  raid: {
    headers: ['Level', 'Min Drives', 'Redundancy', 'Usable Capacity', 'Read Perf', 'Write Perf', 'Use Case'],
    highlightCols: [0],
    amberCols: [2],
    rows: [
      ['RAID 0 (Striping)',      '2', 'None — 1 fail = all lost', 'N × drive size',          'Excellent', 'Excellent', 'Speed; temp data; no mission-critical'],
      ['RAID 1 (Mirroring)',     '2', '1 drive can fail',         '1 drive size (50%)',       'Good (dual-read)', 'Moderate',  'OS drives; boot volumes; simplicity'],
      ['RAID 5 (Stripe+Parity)', '3', '1 drive can fail',         '(N−1) × drive size',       'Good',      'Moderate (parity calc)', 'General-purpose; balance of speed + redundancy'],
      ['RAID 6 (Dual Parity)',   '4', '2 drives can fail',        '(N−2) × drive size',       'Good',      'Lower (2 parities)',  'Large arrays; high-value data; long rebuild'],
      ['RAID 10 (1+0)',          '4', '1 per mirrored pair',      '50% of total',             'Excellent', 'Good',      'Databases; VMs; best all-round performance'],
      ['JBOD (Spanning)',        '2', 'None',                     '100% total',               'Normal',    'Normal',    'Just a Bunch Of Disks — no RAID benefits'],
    ]
  },

  // ── OSI MODEL ────────────────────────────────────────────────────────────
  osi: {
    headers: ['Layer', 'Name', 'PDU', 'Protocols / Examples', 'Devices', 'Mnemonic'],
    highlightCols: [0, 1],
    amberCols: [4],
    rows: [
      ['7', 'Application',  'Data',     'HTTP, HTTPS, FTP, DNS, SMTP, DHCP, RDP, Telnet, SSH', 'Firewalls (L7), Proxy', 'All'],
      ['6', 'Presentation', 'Data',     'TLS/SSL, MIME, JPEG, MPEG, ASCII, encryption',         'Gateway',               'People'],
      ['5', 'Session',      'Data',     'NetBIOS, RPC, SIP, SQL sessions, SMB session layer',   'Gateway',               'Seem'],
      ['4', 'Transport',    'Segment',  'TCP (reliable), UDP (unreliable), port numbers',        'Firewall, Load Balancer','To'],
      ['3', 'Network',      'Packet',   'IP (IPv4/IPv6), ICMP, OSPF, BGP, RIP',                 'Router, L3 Switch',     'Need'],
      ['2', 'Data Link',    'Frame',    'Ethernet, 802.11 Wi-Fi, ARP, MAC addresses, VLANs',    'Switch, Bridge, NIC',   'Data'],
      ['1', 'Physical',     'Bit',      'Cables (Cat, Fiber, Coax), hubs, repeaters, signals',  'Hub, Repeater, NIC',    'Processing'],
    ]
  },

  // ── IP ADDRESSING ────────────────────────────────────────────────────────
  ip: {
    headers: ['Range / Concept', 'Value', 'Notes'],
    highlightCols: [0],
    amberCols: [1],
    rows: [
      ['Class A Private',     '10.0.0.0 – 10.255.255.255',     '/8 · 16.7 M hosts · large enterprise / ISP'],
      ['Class B Private',     '172.16.0.0 – 172.31.255.255',   '/12 · 1 M hosts · mid-size org'],
      ['Class C Private',     '192.168.0.0 – 192.168.255.255', '/16 · 65 K hosts · SOHO / home networks'],
      ['Loopback',            '127.0.0.1',                     'Localhost; test IP stack without NIC'],
      ['APIPA',               '169.254.0.0 – 169.254.255.255', 'Auto-assigned if DHCP fails; link-local; /16'],
      ['Broadcast (all)',     '255.255.255.255',               'Limited broadcast; stays on local segment'],
      ['Multicast',           '224.0.0.0 – 239.255.255.255',  'One-to-many groups (OSPF, video stream)'],
      ['Link-Local Multicast','224.0.0.x',                    'OSPF (224.0.0.5/6), EIGRP (224.0.0.10)'],
      ['Public / Routable',   'Everything else',              'Assigned by ISP; unique on internet'],
      ['IPv6 Loopback',       '::1',                          'IPv6 equivalent of 127.0.0.1'],
      ['IPv6 Link-Local',     'fe80::/10',                    'Auto-configured on every interface; not routed'],
      ['IPv6 Global Unicast', '2000::/3',                     'Publicly routable IPv6 (ISP-assigned)'],
      ['IPv6 Unique Local',   'fc00::/7',                     'Private IPv6 (fd::/8 most common)'],
      ['IPv6 Multicast',      'ff00::/8',                     'Multicast groups (ff02::1 = all nodes)'],
      ['/24 Subnet',          '255.255.255.0',                '254 usable hosts; most common SOHO subnet'],
      ['/25 Subnet',          '255.255.255.128',              '126 hosts per half; splits /24 into 2'],
      ['/26 Subnet',          '255.255.255.192',              '62 hosts; 4 subnets per /24'],
      ['/27 Subnet',          '255.255.255.224',              '30 hosts; 8 subnets per /24'],
      ['/28 Subnet',          '255.255.255.240',              '14 hosts; 16 subnets per /24'],
      ['/30 Subnet',          '255.255.255.252',              '2 hosts; point-to-point links'],
    ]
  },

  // ── PRINTERS ─────────────────────────────────────────────────────────────
  printers: {
    headers: ['Technology', 'Print Method', 'Speed', 'Cost per Page', 'Special Notes', 'Failure Symptoms'],
    highlightCols: [0],
    amberCols: [3],
    rows: [
      ['Laser (Mono)',     'Toner fused by heat/pressure',       'Fast (20–50 ppm)', 'Very low',   'Best for high-volume text; 7-step process', 'Smearing=fuser; lines=drum; ghosting=corona'],
      ['Laser (Color)',    'CMYK toner drums, transfer belt',     'Moderate',         'Low',        '4 toner cartridges + transfer belt + fuser', 'Incorrect color=calibration; banding=drum'],
      ['Inkjet',          'Liquid ink sprayed through nozzles',  'Moderate',         'High',       'Best for color photos; needs periodic head clean', 'Streaking=clogged head; bleeding=wrong paper'],
      ['Thermal (Direct)',  'Heat activates chemically-treated paper', 'Fast',        'Paper cost only', 'Receipt printers; no ink/toner; fades in heat', 'Faded output=dirty/failing print head'],
      ['Thermal Transfer',  'Heat transfers ribbon wax/resin to media', 'Fast',      'Low',        'Label printers; durable; barcodes, shipping',  'Faded print=ribbon worn; misalignment=media'],
      ['Impact / Dot Matrix','Print head pins strike ribbon',    'Slow',             'Very low',   'Multi-part carbon forms; loud; works in dust/grease', 'Missing dots=print head pins broken'],
      ['3D (FDM)',         'Filament melted layer by layer',      'Very slow',        'Filament cost', 'ABS/PLA; heated bed; layer resolution key',  'Stringing=temp; warping=bed adhesion'],
      ['Virtual / PDF',   'Outputs file instead of paper',       'Near instant',     'Free',       'Print to PDF, XPS, OneNote; no physical output', 'Missing driver=no output'],
    ]
  },

  // ── EXAM DOMAINS ─────────────────────────────────────────────────────────
  domains: {
    headers: ['Exam', 'Domain', 'Weight', 'Key Topics'],
    highlightCols: [0],
    amberCols: [2],
    rows: [
      ['Core 1 (1201)', '1.0 Mobile Devices',                    '15%', 'Laptop hardware, display, battery, accessories, mobile OS'],
      ['Core 1 (1201)', '2.0 Networking',                        '20%', 'Protocols, ports, IP, TCP/UDP, wireless, network hardware'],
      ['Core 1 (1201)', '3.0 Hardware',                          '27%', 'CPUs, RAM, storage, motherboards, power, displays, printers'],
      ['Core 1 (1201)', '4.0 Virtualization & Cloud Computing',  '12%', 'Cloud models (IaaS/PaaS/SaaS), VMs, hypervisors, containers'],
      ['Core 1 (1201)', '5.0 Hardware & Network Troubleshooting','26%', 'Methodology, cable tools, display issues, drive failure, network'],
      ['Core 2 (1202)', '1.0 Operating Systems',                 '31%', 'Windows versions, macOS, Linux, file systems, command line'],
      ['Core 2 (1202)', '2.0 Security',                          '25%', 'Threats, malware, hardening, encryption, authentication, PKI'],
      ['Core 2 (1202)', '3.0 Software Troubleshooting',          '22%', 'Windows errors, BSOD, app crashes, malware removal, mobile'],
      ['Core 2 (1202)', '4.0 Operational Procedures',            '22%', 'Safety, documentation, backup, change mgmt, compliance, ESD'],
    ]
  },

  // ── WINDOWS TOOLS ────────────────────────────────────────────────────────
  windows: {
    headers: ['Tool / Command', 'How to Open', 'Purpose', 'Key Options / Notes'],
    highlightCols: [0],
    amberCols: [1],
    rows: [
      ['msconfig',          'Run → msconfig',            'System Configuration — startup, boot, services, tools', 'Selective startup; Safe Boot option; Services tab hide MS services'],
      ['msinfo32',          'Run → msinfo32',            'System Information — hardware resources, components, environment', 'IRQ conflicts; DMA; driver details; export to .NFO'],
      ['regedit',           'Run → regedit',             'Registry Editor — raw Windows configuration database', 'HKLM (machine-wide); HKCU (current user); backup before editing'],
      ['devmgmt.msc',       'Run → devmgmt.msc',         'Device Manager — driver status, update, disable, rollback', 'Yellow ! = driver error; hidden devices (View > Show hidden)'],
      ['diskmgmt.msc',      'Run → diskmgmt.msc',        'Disk Management — partition, format, assign drive letters, GPT/MBR', 'Extend/shrink volumes; initialize new disk; change partition type'],
      ['services.msc',      'Run → services.msc',        'Services — start/stop/disable Windows services', 'Startup type: Automatic/Manual/Disabled; Log On tab for service account'],
      ['taskschd.msc',      'Run → taskschd.msc',        'Task Scheduler — create/manage scheduled tasks', 'Trigger: time, event, logon; Action: program, email, message'],
      ['perfmon',           'Run → perfmon',             'Performance Monitor — real-time counters, data collector sets', 'Add counters (CPU, disk, memory); log to .blg for later analysis'],
      ['resmon',            'Run → resmon',              'Resource Monitor — live CPU/RAM/disk/network per-process view', 'Find which process holds a file; disk activity detail'],
      ['eventvwr.msc',      'Run → eventvwr.msc',        'Event Viewer — Windows, Application, Security, System logs', 'Critical/Error/Warning; Event IDs; filter by source/level/time'],
      ['gpedit.msc',        'Run → gpedit.msc',          'Local Group Policy Editor — security/admin policy (Pro+)', 'Not on Home; Computer vs User Configuration; GPRESULT to check applied'],
      ['lusrmgr.msc',       'Run → lusrmgr.msc',         'Local Users and Groups — manage local accounts/groups (Pro+)', 'Reset passwords; enable/disable admin account; group membership'],
      ['gpresult /r',       'CMD (admin)',               'Show applied Group Policy (RSoP) for user+computer', '/r = summary; /v = verbose; /h file.html = HTML report'],
      ['sfc /scannow',      'CMD (admin)',               'System File Checker — scan and repair protected Windows files', 'Requires admin; repair from WinSxS cache; run before DISM'],
      ['DISM /RestoreHealth','CMD (admin)',              'Repair Windows Component Store (CBS) from WU or local source', '/Online = running OS; /Source for offline ISO repair'],
      ['ipconfig /all',     'CMD',                       'Full network config — IP, mask, gateway, DNS, MAC, DHCP info', '/release /renew for DHCP; /flushdns to clear DNS cache'],
      ['netstat -ano',      'CMD',                       'Active connections + listening ports + owning PID', '-a all; -n numeric; -o PID; find PID in Task Manager'],
      ['tracert',           'CMD',                       'Trace route hops to destination — shows latency per hop', 'Uses ICMP TTL; * = firewall blocking ICMP; -d = no DNS resolve'],
      ['nslookup',          'CMD',                       'DNS query tool — resolve hostnames and test DNS servers', 'nslookup domain [server]; type=MX for mail records'],
      ['ping',              'CMD',                       'Test reachability and round-trip latency via ICMP echo', '-t = continuous; -l = packet size; -a = resolve hostname'],
      ['chkdsk /f /r',      'CMD (admin)',               'Check and repair file system errors and bad sectors', '/f = fix errors; /r = locate bad sectors (requires reboot for C:)'],
      ['diskpart',          'CMD (admin)',               'Advanced partition management — CLI alternative to diskmgmt', 'list disk; select disk; clean; create partition primary; format'],
      ['robocopy',          'CMD',                       'Robust file copy — resume, mirror, log, preserve attributes', '/MIR = mirror; /Z = restartable; /LOG:file; replaces xcopy'],
      ['cipher /w',         'CMD',                       'Overwrite free space with zeros/ones — secure wipe unencrypted', 'Does NOT encrypt; use BitLocker for drive encryption'],
      ['bcdedit',           'CMD (admin)',               'Boot Configuration Data editor — manage OS boot entries', 'Add /set; view /enum; repair: bcdedit /default {current}'],
      ['winver',            'Run → winver',              'Quick check of exact Windows version and build number', 'Shows OS version; build; update level (quick support lookup)'],
    ]
  }

};
