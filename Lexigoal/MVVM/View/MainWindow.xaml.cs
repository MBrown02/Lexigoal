using System.Windows;
using System.Windows.Input;

namespace Lexigoal
{
	/// <summary>
	/// Interaction logic for MainWindow.xaml
	/// </summary>
	public partial class MainWindow : Window
	{
		public MainWindow()
		{
			InitializeComponent();
		}

		private void TitleBar_MouseDown(object sender, MouseButtonEventArgs e)
		{
			if (e.LeftButton == MouseButtonState.Pressed)
			{
				DragMove();
			}
		}

		private void ButtonMinimize_Click(object sender, RoutedEventArgs e)
		{
			Application.Current.MainWindow.WindowState = WindowState.Minimized;
		}

		private void ButtonMaximizeToggle_Click(object sender, RoutedEventArgs e)
		{
			if (Application.Current.MainWindow.WindowState != WindowState.Maximized)
			{
				Application.Current.MainWindow.WindowState = WindowState.Maximized;
			}
			else
			{
				Application.Current.MainWindow.WindowState = WindowState.Normal;
			}
		}

		private void CloseButton_Click(object sender, RoutedEventArgs e)
		{
			Application.Current.Shutdown();
		}
	}
}
