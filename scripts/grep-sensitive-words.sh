#!/bin/bash

# Show help message
show_help() {
  echo "Usage: $0 <APK folder path>"
  echo
  echo "Description:"
  echo "  Recursively grep for sensitive keywords in the given folder"
  echo "  and save results in separate files under 'grep_results/'."
  echo
  echo "Example:"
  echo "  $0 APKfolder/"
  exit 0
}

# Check for -h or no arguments
if [ "$1" == "-h" ] || [ "$1" == "--help" ] || [ -z "$1" ]; then
  show_help
fi

search_dir="$1"

if [ ! -d "$search_dir" ]; then
  echo "Error: '$search_dir' is not a valid directory."
  exit 1
fi

# Keywords to search
keywords=(
  "accesskey" "admin" "aes" "api_key" "apikey" "checkClientTrusted"
  "crypt" "http:" "https:" "password" "pinning" "secret" "SHA256"
  "SharedPreferences" "superuser" "token" "X509TrustManager" "insert into"
)

mkdir -p grep_results

for keyword in "${keywords[@]}"; do
  safe_keyword=$(echo "$keyword" | sed 's/[: ]/_/g')
  grep -EHirn --include=\*.{smali,xml,java,txt} "$keyword" "$search_dir" > "grep_results/${safe_keyword}.txt"
done
